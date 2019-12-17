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
          header: "Coffee Break",
          description:
            "After the investigation of science history, our attendees are most passionate and vocal about coffee (and tea). Fuel these scholars’ minds by sponsoring a coffee break at the 2019 annual meeting. Attendees will be forever grateful.",
          body: [
            "Coffee Break Sponsorship: $500+",
            "Sponsors enjoy all Ptolemy-Level Benefits, including acknowledgment on HSS meeting website, personalized sponsor page on meeting website, and more",
            'Deadline: XXXX 2019"'
          ],
          footer: "Sponsor a Coffee Break"
        },
        {
          id: "2",
          header: "HSS Women's Caucus Breakfast",
          description:
            "Established in 1973, the HSS Women’s Caucus was founded to evaluate and improve the continuing status of women in the history of science. HSS provides assistance for the breakfasts, especially so that students can attend without cost",
          body: [
            "WC Breakfast Sponsorship: $500+",
            "Reception sponsors enjoy all Ptolemy-Level Benefits, including acknowledgment on HSS meeting website, personalized sponsor page on meeting website, and more"
          ],
          footer: "Sponsor the WC Breakfast"
        },
        {
          id: "3",
          header: "Graduate Student Mixer",
          description:
            "Provide graduate students, comprising some 20% of attendees, a chance to meet colleagues from around the world",
          body: [
            "Mixer Sponsorship: $500+",
            "Reception sponsors enjoy all Ptolemy-Level Benefits, including acknowledgment on HSS meeting website, personalized sponsor page on meeting website, and more",
            "Deadline: XXXX"
          ],
          footer: "Sponsor the Mixer"
        },
        {
          id: "4",
          header: "Reception",
          description:
            "After a long (but enjoyable!) day of papers, attendees look forward to the food and festivities of our meeting reception. Help welcome them to this event by sponsoring it.",
          body: [
            "Reception Sponsorship: $2,000+",
            "Reception sponsors enjoy all Einstein-Level Benefits, including branded signage, complimentary registration for two, and more",
            "Deadline: xxxx"
          ],
          footer: "Sponsor a Reception"
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
