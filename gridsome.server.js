// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");
const slugify = require("slugify");
const path = require("path");
require("dotenv").config();

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
  const urlForExhibitors =
    "http://www.formstack.com/api/v2/form/3340779/submission.json";
  api.loadSource(async actions => {
    const { data } = await axios.get(urlForExhibitors, {
      params: {
        data: 1
      },
      headers: { Authorization: "Bearer " + process.env.FORMSTACK_API }
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
          instagram: item.data["73849017"] ? item.data["73849017"].value : "",
          other: item.data["73849899"] ? item.data["73849899"].value : ""
        },
        books: {
          title1Url: item.data["88952778"] ? item.data["88952778"].value : "",
          title2Url: item.data["88952779"] ? item.data["88952779"].value : "",
          title3Url: item.data["88952780"] ? item.data["88952780"].value : "",
          title1Img: item.data["88952791"] ? item.data["88952791"].value : "",
          title2Img: item.data["88952792"] ? item.data["88952792"].value : "",
          title3Img: item.data["88952800"] ? item.data["88952800"].value : ""
        },
        level: item.data["89169540"] ? item.data["89169540"].value : "",
        logo: path.resolve(
          process.cwd(),
          "src/assets/img",
          slugify(item.data["73848747"].value) + ".jpg"
        )
      });
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });
};
