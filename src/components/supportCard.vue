<template>
  <div class="support__card">
    <div class="support__header">
      <p>{{ computedHeader }}</p>
    </div>
    <slot></slot>
    <div class="support__body">
      <p class="support__benefits">Benefits</p>
      <ul v-for="item in computedBenefit" :key="item">
        <li>{{ item }}</li>
      </ul>
    </div>
    <div>{{ computedFooter }}</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      supportLevels: [
        {
          id: "1",
          header: "Ptolemy ($500-$900)",
          body: [
            "Acknowledgment on HSS meeting website",
            "Personalized sponsor page on meeting website",
            "Links to organization's social media pages",
            "Promotion of up to three titles or other products"
          ]
        },
        {
          id: "2",
          header: "Rosalind Franklin ($1,000–$1,499)",
          body: [
            "Everything in Ptolemy",
            "Complimentary registration for one",
            "Acknowledgment in the printed and digital program"
          ]
        },
        {
          id: "3",
          header: "Albert Einstein ($1,500-$2,499",
          body: [
            "Everything in Franklin",
            "Complimentary registration for two",
            "Acknowledgment in the HSS Newsletter (October 2020)",
            "Branded signage at the meeting"
          ]
        },
        {
          id: "4",
          header: "Charles Darwin ($2,500+)",
          body: [
            "Everything in Einstein",
            "Complimentary exhibition table",
            "Promotion on HSS Twitter and Facebook"
          ]
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
    computedFooter() {
      return "";
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

<style lang="scss">
.support {
  &__box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    align-items: stretch;
  }
  &__card {
    display: flex;
    flex-direction: column;
    width: 20rem;
    margin: 1rem;
    @include box-shadow($large: true);
    @include respond-above(lg) {
      width: 22rem;
    }
  }

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 0.25rem;
    margin: 0;
    line-height: 1.1;
    text-align: center;
    text-transform: uppercase;

    & > p {
      margin: 0;
    }

    .dark & {
      background: $darkLink;
      color: $textBright;
    }
    .bright & {
      background: $brightLink;
      color: $textDark;
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
    padding: 0.5rem;
    flex: 1;
  }

  &__footer {
    height: 3rem;
    font-size: 1.5rem;
    font-weight: 600;

    margin: 0;

    line-height: 3rem;
    text-align: center;
    text-transform: uppercase;
    background-color: $accent;
    text-decoration: none;
    transition: background-color 0.2s ease;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;

    a {
      color: $textBright;
      text-decoration: none;
    }

    &:hover {
      background-color: scale-color($accent, $lightness: -25%);
    }
  }
}
</style>
