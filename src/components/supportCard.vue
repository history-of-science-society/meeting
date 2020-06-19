<template>
  <div class="card__item">
    <div class="card__top">
      <p class="card__title">
        {{ dataList[this.property.deftype][this.property.id]["header"] }}
      </p>
      <slot></slot>
      <p>
        <strong>Benefits</strong>
      </p>
      <ul>
        <li
          v-for="(item, index) in dataList[this.property.deftype][
            this.property.id
          ]['body']"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="card__bottom">
      <a
        v-if="dataList[this.property.deftype][this.property.id]['footer']"
        href="https://hssonline.formstack.com/forms/support"
        class="btn"
        target="blank"
        rel="noopener"
      >
        {{ dataList[this.property.deftype][this.property.id]["footer"] }}
        <external-link-icon class="card__icon" />
      </a>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";
export default {
  components: {
    ExternalLinkIcon,
  },
  props: {
    property: Object,
  },
  data: function() {
    return {
      dataList: {
        level: [
          {
            header: "Ptolemy ($500-$999)",
            body: [
              "Acknowledgment on HSS meeting website",
              "Personalized sponsor card on meeting website",
              "Links to organization’s social media pages",
              "Promotion of up to three titles or other products",
            ],
          },
          {
            header: "Franklin ($1,000–$1,499)",
            body: [
              "Everything in Ptolemy",
              "One complimentary registration",
              "Acknowledgment in the printed and digital program",
            ],
          },
          {
            header: "Einstein ($1,500-$2,499)",
            body: [
              "Everything in Franklin",
              "Two complimentary registrations",
              "Acknowledgment in the HSS Newsletter (October 2020)",
              "Branded signage at the meeting",
            ],
          },
          {
            header: "Darwin ($2,500+)",
            body: [
              "Everything in Einstein",
              "Complimentary exhibition table",
              "Promotion on HSS Twitter and Facebook",
            ],
          },
        ],
        ad: [
          {
            header: "Program",
            description:
              "Published in print and digitally, attendees have reported that the meeting program is their most cherished conference resource. Promote your product or event as they peruse the program",
            body: [
              "Interior Page: $275",
              "Inside Cover: $400",
              'Size: 4.25" x 7"',
              "Format: High-Resolution PDF",
              "Deadline: 16 August 2020",
            ],
            footer: "Reserve a Program Ad",
          },
          {
            header: "Newsletter",
            description:
              "Published on hssonline.org, emailed to our 1800+ members, and shared via HSS social media, a newsletter ad allows you to reach anyone and everyone interested in the history of science",
            body: [
              'Full-Page Ad (9" x 7.5"): $500',
              'Vertical Half-Page Ad (4.5" x 5.5"): $300',
              'Quarter-Page Ad (3" x 5"): $150',
              "Deadline for July 2020 issue: 1 June 2020",
              "Deadline for October 2020 issue: 16 August 2020",
              "⭐Book for both issues and get your second ad half price⭐",
            ],
            footer: "Reserve a Newsletter Ad",
          },
          {
            header: "Website",
            description:
              "Projected to reach over 20,000 pageviews, greet our attendees with your customized banner ad on our meeting website",
            body: [
              "Banner ad: $800",
              "For the HSS meeting website",
              "Ad will be live from time of reception until (at least) meeting conclusion",
            ],
            footer: "Reserve a Banner Ad",
          },
          {
            header: "Packet Inserts",
            description:
              "All 750+ HSS attendees will receive your promotional materials when checking in to the meeting",
            body: [
              "(1) packet insert to be included with registration materials: $475",
              'Inserts must fit within a 9" x 12" envelope or folder',
              "Packet inserts for HSS attendees only. To order inserts for SHOT, visit their website",
              "Dates and details TBA",
            ],
            footer: "Reserve Packet Inserts",
          },
          {
            header: "Branded Lanyards",
            description:
              "Stand out at our annual meeting by sponsoring customized lanyards, branded with your company name and logo. These lanyards hold the name badges that our attendees brandish with gusto.",
            body: [
              "Branded Lanyards: $750.00",
              "For HSS attendees only",
              "Deadline: 26 June 2020",
            ],
            footer: "Reserve Branded Lanyards",
          },
          {
            header: "Branded Folders",
            description:
              "Help deliver our meeting materials in style! These customized folders will feature your company name and logo, with the addition of any other information you would like to communicate. Every attendee will receive this folder upon check in.",
            body: [
              "Branded Folders: $1,000.00",
              "For HSS attendees only",
              "Deadline: 26 June 2020",
            ],
            footer: "Reserve Branded Folders",
          },
        ],
        sponsor: [
          {
            header: "Coffee Break",
            description:
              "After the investigation of science history, our attendees are most passionate and vocal about coffee (and tea). Fuel these scholars’ minds by sponsoring a coffee break at the 2020 Annual Meeting. Attendees will be forever grateful.",
            body: [
              "Coffee Break Sponsorship: $500+",
              "Sponsors enjoy all Ptolemy-Level Benefits, including acknowledgment on HSS meeting website, personalized sponsor page on meeting website, and more",
              "Deadline: 16 August 2020",
            ],
            footer: "Sponsor a Coffee Break",
          },
          {
            header: "WC Breakfast",
            description:
              "Established in 1973, the HSS Women’s Caucus was founded to evaluate and improve the continuing status of women in the history of science. HSS provides assistance for the breakfasts, especially so that students can attend without cost",
            body: [
              "WC Breakfast Sponsorship: $500+",
              "Reception sponsors enjoy all Ptolemy-Level Benefits, including acknowledgment on HSS meeting website, personalized sponsor page on meeting website, and more",
              "Deadline: 16 August 2020",
            ],
            footer: "Sponsor the WC Breakfast",
          },
          {
            header: "Graduate Student Mixer",
            description:
              "Provide graduate students, comprising some 20% of attendees, a chance to meet colleagues from around the world",
            body: [
              "Mixer Sponsorship: $500+",
              "Reception sponsors enjoy all Ptolemy-Level Benefits, including acknowledgment on HSS meeting website, personalized sponsor page on meeting website, and more",
              "🎉",
              "Deadline: 16 August 2020",
            ],
            footer: "Sponsor the Mixer",
          },
          {
            header: "Reception",
            description:
              "After a long (but enjoyable!) day of papers, attendees look forward to the food and festivities of our meeting receptions. Help welcome them to the event.",
            body: [
              "Reception Sponsorship: $2,000+",
              "Reception sponsors enjoy all Einstein-Level Benefits, including branded signage, complimentary registration for two, and more",
              "Deadline: 16 August 2020",
            ],
            footer: "Sponsor a Reception",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.support {
  &__header {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.2rem;
    font-weight: 600;
    padding: 1rem 0.25rem;
    margin: 0;
    line-height: 1.1;
    text-align: center;
    text-transform: uppercase;
    border-top-right-radius: 9px;
    border-top-left-radius: 9px;
    width: 100%;

    & > p {
      margin: 0;
    }

    .dark & {
      color: $textBright;
      background: $darkLink;
    }
    .bright & {
      color: $textDark;
      background: $brightLink;
    }
  }

  &__img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
  &__benefits {
    font-weight: 600;
  }
  &__body {
    flex: 1;
    padding: 0.5rem;
  }

  &__footer {
    align-items: center;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    display: flex;
    font-size: 1.1rem;
    font-weight: 600;
    justify-content: center;
    margin: 0 0.5rem 0.5rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: background-color 0.2s ease;

    a {
      background-color: $accent;
      border-radius: 5px;
      @include box-shadow($small: true);
      color: $textBright;
      padding: 0.5rem;
      text-decoration: none;
      &:hover {
        background-color: scale-color($accent, $lightness: -25%);
        box-shadow: 0 0 0 black;
      }
    }
  }
}
</style>
