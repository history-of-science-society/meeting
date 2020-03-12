// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");
const slugify = require("slugify");
const path = require("path");
const getValue = input => {
  if (!input) {
    return null;
  }

  return input.value;
};

module.exports = function(api) {
  api.loadSource(store => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api

    const data = require("./data/settings.json");

    const Menu = store.addCollection({ typeName: "Menu" });

    for (const item of data.sidebar) {
      Menu.addNode({
        section: item.section,
        topics: item.topics
      });
    }
  });

  // Exhibitors
  const urlForExhibitors =
    "http://www.formstack.com/api/v2/form/3340779/submission.json";

  api.loadSource(async actions => {
    const { data } = await axios.get(urlForExhibitors, {
      params: {
        data: 1
      },
      headers: { Authorization: "Bearer fcb9c2653a8bff17c5336ebbb020b1ab" }
    });

    const { submissions } = data;

    const Sponsors = actions.addCollection({
      typeName: "Sponsors"
    });

    for (const item of submissions) {
      Sponsors.addNode({
        id: item.id || "",
        type: item.data["88779197"]
          ? item.data["88779197"].value.split(/\n/)
          : "",
        name: item.data["73848747"] ? item.data["73848747"].value : "",
        description: item.data["73848753"] ? item.data["73848753"].value : "",
        website: item.data["73848845"] ? item.data["73848845"].value : "",
        social: {
          blog: item.data["73848915"] ? item.data["73848915"].value : "",
          twitter: item.data["73848950"] ? item.data["73848950"].value : "",
          facebook: item.data["73848986"] ? item.data["73848986"].value : "",
          youtube: item.data["73849007"] ? item.data["73849007"].value : "",
          instagram: item.data["73849007"] ? item.data["73849007"].value : "",
          other: item.data["73849899"] ? item.data["73849899"].value : ""
        },
        books: {
          title1: item.data["73850442"] ? item.data["73850442"].value : "",
          title2: item.data["73850476"] ? item.data["73850476"].value : "",
          title3: item.data["73850472"] ? item.data["73850472"].value : ""
        },
        logo: path.resolve(
          process.cwd(),
          "src/assets/img",
          slugify(item.data["73848747"].value) + ".jpg"
        )
      });
    }
  });

  // For abstracts
  const urlForAbstracts =
    "http://www.formstack.com/api/v2/form/3672713/submission.json";

  api.loadSource(async actions => {
    const {
      data: { pages }
    } = await axios.get(urlForAbstracts, {
      params: {
        data: 0
      },
      headers: { Authorization: "Bearer fcb9c2653a8bff17c5336ebbb020b1ab" }
    });

    const total = [];

    const forLoop = async () => {
      for (let i = 1; i < pages; i++) {
        const {
          data: { submissions }
        } = await axios.get(urlForAbstracts, {
          params: {
            data: true,
            page: i
          },
          headers: { Authorization: "Bearer fcb9c2653a8bff17c5336ebbb020b1ab" }
        });

        total.push(submissions);
      }
      return total.flat();
    };

    const submissions = await forLoop();

    const Abstracts = actions.addCollection({
      typeName: "Abstracts"
    });

    for (const item of submissions) {
      Abstracts.addNode({
        id: item.id || "",
        title: item.data["85330541"].value,
        abstract: item.data["85330542"].value,
        metadata: {
          topic: item.data["85330544"].value,
          chronology: item.data["85330545"].value,
          geography: item.data["85330546"].value,
          keywords: getValue(item.data["85330547"])
        },
        author: {
          name: item.data["85330549"].value,

          first: item.data["85330549"].value.match(/first = (\w+)/)[1],

          last: item.data["85330549"].value.match(/last = (\w+)/)[1]
        }
      });
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });
};
