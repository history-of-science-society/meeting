<template>
  <div class="support__card">
    <div class="support__header">
      <p>{{ computedHeader }}</p>
    </div>
    <slot></slot>
    <div class="support__body">
      <p class="support__benefits">Description</p>
      <p>{{ computedDescription }}</p>
      <p class="support__benefits">Pricing</p>
      <ul v-for="item in computedBenefit" :key="item">
        <li v-html="item"></li>
      </ul>
    </div>
    <div class="support__footer">
      <a href="#" class="support__link" target="blank" rel="noopener">{{
        computedFooter
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      supportLevels: [
        {
          id: "1",
          header: "Program",
          description:
            "Published in print and digitally, attendees have reported that the meeting program is their most cherished conference resource. Promote your product or event as they peruse the program",
          body: [
            "Interior Page: $275",
            "Inside Cover: $400",
            'Size: 4.25" x 7"',
            "Format: High-Resolution PDF",
            "Deadline: 1 September 2019"
          ],
          footer: "Reserve a Program Ad"
        },
        {
          id: "2",
          header: "Newsletter",
          description:
            "Published on hssonline.org, emailed to our 1800 members, and shared via HSS social media, a newsletter ad allows you to reach anyone interested in science history.",
          body: [
            'Full-Page Ad (9" x 7.5"): $500',
            'Vertical Half-Page Ad (4.5" x 5.5"): $300',
            'Quarter-Page Ad (3" x 5"): $150',
            "Deadline for July 2020 issue: 1 June 2020",
            "Deadline for October 2020 issue: 1 September 2020",
            "<em>Book for both issues and get your second ad half price</em>"
          ],
          footer: "Reserve a Newsletter Ad"
        },
        {
          id: "3",
          header: "Website",
          description:
            "Projected to reach over 20,000 pageviews, greet our attendees with your customized banner ad on our meeting website",
          body: ["Banner ad: $800", "Ad will be live from time of reception"],
          footer: "Reserve a Banner Ad"
        },
        {
          id: "4",
          header: "Packet Inserts",
          description:
            "All 750+ HSS attendees will receive your promotional materials when checking in to the meeting",
          body: [
            "(1) packet insert to be included with registration materials: $475",
            'Inserts must fit within a 9" x 12" envelope or folder',
            "Dates and details TBD"
          ],
          footer: "Reserve Packet Inserts"
        },
        {
          id: "5",
          header: "Branded Lanyards",
          description:
            "Stand out at our annual meeting by sponsoring customized lanyards, branded with your company name and logo. These lanyards hold the name badges that our attendees brandish with gusto.",
          body: ["Branded Lanyards: ---", "Deadline: 16 August 2020"],
          footer: "Reserve Branded Lanyards"
        },
        {
          id: "6",
          header: "Branded Folders",
          description:
            "Help deliver our meeting materials in style! These customized folders will feature your company name and logo, with the addition of any other information you would like to communicate. Every attendee will receive this folder upon check in.",
          body: ["Branded Folders: ---", "Deadline: 16 August 2020"],
          footer: "Reserve Branded Folders"
        }
      ]
    };
  },
  computed: {
    computedHeader: function() {
      const item = this.supportLevels.find(({ id }) => id === this.id);
      return item.header;
    },
    computedBenefit() {
      const item = this.supportLevels.find(({ id }) => id === this.id);
      return item.body;
    },
    computedDescription() {
      const item = this.supportLevels.find(({ id }) => id === this.id);
      return item.description;
    },
    computedFooter() {
      const item = this.supportLevels.find(({ id }) => id === this.id);
      return item.footer;
    }
  },
  props: {
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
