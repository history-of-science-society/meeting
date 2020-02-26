// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");

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

  // api.loadSource(async store => {
  //   const { data } = await axios.get(
  //     "http://www.formstack.com/api/v2/form/3340779/submission.json",
  //     {
  //       params: {
  //         data: 1
  //       },
  //       headers: { Authorization: "Bearer fcb9c2653a8bff17c5336ebbb020b1ab" }
  //     }
  //   );

  //   const { submissions } = data;
  //   const Sponsors = store.addCollection({
  //     typeName: "Sponsors"
  //   });

  //   for (const item of submissions) {
  //     const id = item.id;
  //     const type = item.data["88779197"].value.split(/\n/) || "";
  //     const name = item.data["73848747"].value || "";
  //     const description = item.data["73848753"].value || "";
  //     const website = item.data["73848845"].value || "";
  //     const blog = item.data["73848915"] ? item.data["73848915"].value : "";
  //     const twitter = item.data["73848950"].value || "";
  //     const facebook = item.data["73848986"].value || "";
  //     const youtube = item.data["73849007"].value || "";
  //     const instagram = item.data["73849007"].value || "";
  //     const other = item.data["73849899"].value || "";
  //     const title1 = item.data["73850442"].value || "";
  //     const title2 = item.data["73850476"].value || "";
  //     const title3 = item.data["73850472"].value || "";
  //     const logo = item.data["73850832"].value || "";
  //     Sponsors.addNode({
  //       id: id,
  //       type: type,
  //       name: name,
  //       description: description,
  //       website: website,
  //       social: {
  //         blog: blog,
  //         twitter: twitter,
  //         facebook: facebook,
  //         youtube: youtube,
  //         instagram: instagram,
  //         other: other
  //       },
  //       books: {
  //         title1: title1,
  //         title2: title2,
  //         title3: title3
  //       },
  //       logo: logo
  //     });
  //   }
  // });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });
};
