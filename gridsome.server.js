// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");
const slugify = require("slugify");
const path = require("path");

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
  const url = "http://www.formstack.com/api/v2/form/3340779/submission.json";
  api.loadSource(async store => {
    const { data } = await axios.get(url, {
      params: {
        data: 1
      },
      headers: { Authorization: "Bearer fcb9c2653a8bff17c5336ebbb020b1ab" }
    });

    const { submissions } = data;

    const Sponsors = store.addCollection({
      typeName: "Sponsors"
    });

    for (const item of submissions) {
      const logo = path.resolve(
        process.cwd() +
          "/src/assets/img/" +
          slugify(item.data["73848747"].value) +
          ".jpg"
      );
      console.log(logo);
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
        logo: logo
      });
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });
};
