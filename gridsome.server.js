// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");
const slugify = require("slugify");
const path = require("path");
require("dotenv").config();

const nameRender = (name) => {
  const first =
    name.match(
      /first = ([A-Za-zäáàâāéëèêēūûùüúīîìïíòóöōáäàâç.'ÉÈÊËĒÁÄÀÂĀÃĪÎÌÏÍÕŌÔÒÖÓŪÛÜÚ ]+)/
    ) &&
    name.match(
      /first = ([A-Za-zäáàâāéëèêēūûùüúīîìïíòóöōáäàâç.'ÉÈÊËĒÁÄÀÂĀÃĪÎÌÏÍÕŌÔÒÖÓŪÛÜÚ ]+)/
    )[1];
  const middle =
    name.match(
      /middle = ([A-Za-zäáàâāéëèêēūûùüúīîìïíòóöōáäàâç.'ÉÈÊËĒÁÄÀÂĀÃĪÎÌÏÍÕŌÔÒÖÓŪÛÜÚ ]+)/
    ) &&
    name.match(
      /middle = ([A-Za-zäáàâāéëèêēūûùüúīîìïíòóöōáäàâç.'ÉÈÊËĒÁÄÀÂĀÃĪÎÌÏÍÕŌÔÒÖÓŪÛÜÚ ]+)/
    )[1];
  const last =
    name.match(
      /last = ([A-Za-zäáàâāéëèêēūûùüúīîìïíòóöōáäàâç.'ÉÈÊËĒÁÄÀÂĀÃĪÎÌÏÍÕŌÔÒÖÓŪÛÜÚ ]+)/
    ) &&
    name.match(
      /last = ([A-Za-zäáàâāéëèêēūûùüúīîìïíòóöōáäàâç.'ÉÈÊËĒÁÄÀÂĀÃĪÎÌÏÍÕŌÔÒÖÓŪÛÜÚ ]+)/
    )[1];
  const full =
    middle === null ? first + " " + last : first + " " + middle + " " + last;
  return full;
};

module.exports = function(api) {
  // Menu Sidebar
  api.loadSource((store) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api

    const data = require("./data/settings.json");

    const Menu = store.addCollection({ typeName: "Menu" });

    for (const item of data.sidebar) {
      Menu.addNode({
        section: item.section,
        topics: item.topics,
      });
    }
  });

  // Exhibitors and Sponsors
  const urlForExhibitors =
    "http://www.formstack.com/api/v2/form/3340779/submission.json";
  api.loadSource(async (actions) => {
    const { data } = await axios.get(urlForExhibitors, {
      params: {
        data: 1,
      },
      headers: { Authorization: "Bearer " + process.env.FORMSTACK_API },
    });

    const { submissions } = data;

    const Sponsors = actions.addCollection({
      typeName: "Sponsors",
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
          other: item.data["73849899"] ? item.data["73849899"].value : "",
        },
        books: {
          title1Url: item.data["88952778"] ? item.data["88952778"].value : "",
          title2Url: item.data["88952779"] ? item.data["88952779"].value : "",
          title3Url: item.data["88952780"] ? item.data["88952780"].value : "",
          title1Img: item.data["88952791"] ? item.data["88952791"].value : "",
          title2Img: item.data["88952792"] ? item.data["88952792"].value : "",
          title3Img: item.data["88952800"] ? item.data["88952800"].value : "",
        },
        level: item.data["89169540"] ? item.data["89169540"].value : "",
        logo: path.resolve(
          process.cwd(),
          "src/assets/img",
          slugify(item.data["73848747"].value) + ".jpg"
        ),
      });
    }
  });

  // Program
  const urlForProgramData =
    "http://www.formstack.com/api/v2/form/3922991/submission.json";

  api.loadSource(async (actions) => {
    const {
      data: { pages },
    } = await axios.get(urlForProgramData, {
      headers: { Authorization: "Bearer " + process.env.FORMSTACK_API },
    });
    let programData = [];
    for (let i = 1; i <= pages; i++) {
      const {
        data: { submissions },
      } = await axios.get(urlForProgramData, {
        params: {
          page: i,
          data: 1,
        },
        headers: { Authorization: "Bearer " + process.env.FORMSTACK_API },
      });
      programData = [...programData, ...submissions];
    }

    const Program = actions.addCollection({
      typeName: "Program",
    });

    for (const item of programData) {
      Program.addNode({
        sessionID: item.data["94044973"] && item.data["94044973"].value,
        sessionGroup: item.data["94044961"] && item.data["94044961"].value,
        date: item.data["94044950"] && item.data["94044950"].value,
        startTime: item.data["94044948"] && item.data["94044948"].value,
        endTime: item.data["94044947"] && item.data["94044947"].value,
        joint: item.data["94044180"] && item.data["94044180"].value,
        sponsorship: item.data["94044183"] && item.data["94044183"].value,
        sessionType: item.data["94175803"] && item.data["94175803"].value,
        sessionTitle: item.data["94044186"] && item.data["94044186"].value,
        sessionAbstract: item.data["94044187"] && item.data["94044187"].value,
        sessionTopic: item.data["94044189"] && item.data["94044189"].value,
        sessionChronology: item.data["94044190"] && item.data["94044190"].value,
        sessionGeography: item.data["94044191"] && item.data["94044191"].value,
        keywords: item.data["94044192"] && item.data["94044192"].value,
        organizerName:
          item.data["94044194"] && nameRender(item.data["94044194"].value),
        organizerEmail: item.data["94044195"] && item.data["94044195"].value,
        organizerInstitutionalAffiliation:
          item.data["94044479"] && item.data["94044479"].value,
        coOrganizerName:
          item.data["94044206"] && nameRender(item.data["94044206"].value),
        coOrganizerEmail: item.data["94044207"] && item.data["94044207"].value,
        coOrganizerInstitutionalAffiliation:
          item.data["94044495"] && item.data["94044495"].value,
        chairName:
          item.data["94044216"] && nameRender(item.data["94044216"].value),
        chairEmail: item.data["94044217"] && item.data["94044217"].value,
        chairInstitutionalAffiliation:
          item.data["94044219"] && item.data["94044219"].value,
        abstract1Title: item.data["94044226"] && item.data["94044226"].value,
        abstract1: item.data["94044227"] && item.data["94044227"].value,
        abstract1Topic: item.data["94044229"] && item.data["94044229"].value,
        abstract1Chronology:
          item.data["94044230"] && item.data["94044230"].value,
        abstract1Geography:
          item.data["94044231"] && item.data["94044231"].value,
        abstract1SelfDesignatedKeywords:
          item.data["94044232"] && item.data["94044232"].value,
        author1Name:
          item.data["94044234"] && nameRender(item.data["94044234"].value),
        author1Email: item.data["94044235"] && item.data["94044235"].value,
        author1InstitutionalAffiliation:
          item.data["94044238"] && item.data["94044238"].value,
        coAuthor1Name:
          item.data["94044246"] && nameRender(item.data["94044246"].value),
        coAuthor1Email: item.data["94044247"] && item.data["94044247"].value,
        coAuthor1InstitutionalAffiliation:
          item.data["94044251"] && item.data["94044251"].value,
        abstract2Title: item.data["94044258"] && item.data["94044258"].value,
        abstract2: item.data["94044259"] && item.data["94044259"].value,
        abstract2Topic: item.data["94044261"] && item.data["94044261"].value,
        abstract2Chronology:
          item.data["94044262"] && item.data["94044262"].value,
        abstract2Geography:
          item.data["94044263"] && item.data["94044263"].value,
        abstract2SelfDesignatedKeywords:
          item.data["94044264"] && item.data["94044264"].value,
        author2Name:
          item.data["94044266"] && nameRender(item.data["94044266"].value),
        author2Email: item.data["94044267"] && item.data["94044267"].value,
        author2InstitutionalAffiliation:
          item.data["94044270"] && item.data["94044270"].value,
        coAuthor2Name:
          item.data["94044278"] && nameRender(item.data["94044278"].value),
        coAuthor2Email: item.data["94044279"] && item.data["94044279"].value,
        coAuthor2InstitutionalAffiliation:
          item.data["94044283"] && item.data["94044283"].value,
        abstract3Title: item.data["94044290"] && item.data["94044290"].value,
        abstract3: item.data["94044291"] && item.data["94044291"].value,
        abstract3Topic: item.data["94044293"] && item.data["94044293"].value,
        abstract3Chronology:
          item.data["94044294"] && item.data["94044294"].value,
        abstract3Geography:
          item.data["94044295"] && item.data["94044295"].value,
        abstract3SelfDesignatedKeywords:
          item.data["94044296"] && item.data["94044296"].value,
        author3Name:
          item.data["94044298"] && nameRender(item.data["94044298"].value),
        author3Email: item.data["94044299"] && item.data["94044299"].value,
        author3InstitutionalAffiliation:
          item.data["94044302"] && item.data["94044302"].value,
        coAuthor3Name:
          item.data["94044310"] && nameRender(item.data["94044310"].value),
        coAuthor3Email: item.data["94044311"] && item.data["94044311"].value,
        coAuthor3InstitutionalAffiliation:
          item.data["94044314"] && item.data["94044314"].value,
        abstract4Title: item.data["94044321"] && item.data["94044321"].value,
        abstract4: item.data["94044322"] && item.data["94044322"].value,
        abstract4Topic: item.data["94044324"] && item.data["94044324"].value,
        abstract4Chronology:
          item.data["94044325"] && item.data["94044325"].value,
        abstract4Geography:
          item.data["94044326"] && item.data["94044326"].value,
        abstract4SelfDesignatedKeywords:
          item.data["94044327"] && item.data["94044327"].value,
        author4Name:
          item.data["94044329"] && nameRender(item.data["94044329"].value),
        author4Email: item.data["94044330"] && item.data["94044330"].value,
        author4InstitutionalAffiliation:
          item.data["94044333"] && item.data["94044333"].value,
        coAuthor4Name:
          item.data["94044341"] && nameRender(item.data["94044341"].value),
        coAuthor4Email: item.data["94044342"] && item.data["94044342"].value,
        coAuthor4InstitutionalAffiliation:
          item.data["94044346"] && item.data["94044346"].value,
        commentatorName:
          item.data["94044353"] && nameRender(item.data["94044353"].value),
        commentatorEmail: item.data["94044354"] && item.data["94044354"].value,
        commentatorInstitutionalAffiliation:
          item.data["94044356"] && item.data["94044356"].value,
        author5Name:
          item.data["94044662"] && nameRender(item.data["94044662"].value),
        author5Email: item.data["94044663"] && item.data["94044663"].value,
        author5InstitutionalAffiliation:
          item.data["94044664"] && item.data["94044664"].value,
        coAuthor5Name:
          item.data["94044669"] && nameRender(item.data["94044669"].value),
        coAuthor5Email: item.data["94044670"] && item.data["94044670"].value,
        coAuthor5InstitutionalAffiliation:
          item.data["94044671"] && item.data["94044671"].value,
        author6Name:
          item.data["94044698"] && nameRender(item.data["94044698"].value),
        author6Email: item.data["94044699"] && item.data["94044699"].value,
        author6InstitutionalAffiliation:
          item.data["94044700"] && item.data["94044700"].value,
        coAuthor6Name:
          item.data["94044713"] && nameRender(item.data["94044713"].value),
        coAuthor6Email: item.data["94044714"] && item.data["94044714"].value,
        coAuthor6InstitutionalAffiliation:
          item.data["94044715"] && item.data["94044715"].value,
        author7Name:
          item.data["94044748"] && nameRender(item.data["94044748"].value),
        author7Email: item.data["94044749"] && item.data["94044749"].value,
        author7InstitutionalAffiliation:
          item.data["94044750"] && item.data["94044750"].value,
        coAuthor7Name:
          item.data["94044758"] && nameRender(item.data["94044758"].value),
        coAuthor7Email: item.data["94044759"] && item.data["94044759"].value,
        coAuthor7InstitutionalAffiliation:
          item.data["94044760"] && item.data["94044760"].value,
        author8Name:
          item.data["94044768"] && nameRender(item.data["94044768"].value),
        author8Email: item.data["94044769"] && item.data["94044769"].value,
        author8InstitutionalAffiliation:
          item.data["94044770"] && item.data["94044770"].value,
        coAuthor8Name:
          item.data["94044874"] && nameRender(item.data["94044874"].value),
        coAuthor8Email: item.data["94044875"] && item.data["94044875"].value,
        coAuthor8InstitutionalAffiliation:
          item.data["94044876"] && item.data["94044876"].value,
      });
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });
};
