<template>
  <section>
    <p class="abstract__metadata-header">Topic</p>
    <select v-model="topic">
      <option disabled value>Please select one</option>
      <option value="All">All</option>
      <option
        value="Tools for Historians of Science"
      >Tools for Historians of Science {{ abstractCountByCategory("topic","Tools for Historians of Science") }}</option>
      <option
        value="Theoretical Approaches to the Study of Science"
      >Theoretical Approaches to the Study of Science {{ abstractCountByCategory("topic","Theoretical Approaches to the Study of Science") }}</option>
      <option
        value="Thematic Approaches to the Study of Science"
      >Thematic Approaches to the Study of Science {{ abstractCountByCategory("topic","Theoretical Approaches to the Study of Science") }}</option>
      <option
        value="Aspects of Scientific Practice/Organization"
      >Aspects of Scientific Practice/Organization {{ abstractCountByCategory("topic","Aspects of Scientific Practice/Organization") }}</option>
      <option value="Biology">Biology {{ abstractCountByCategory("topic","Biology") }}</option>
      <option value="Chemistry">Chemistry {{ abstractCountByCategory("topic","Chemistry") }}</option>
      <option
        value="Earth and Environmental Sciences"
      >Earth and Environmental Sciences {{ abstractCountByCategory("topic","Earth and Environmental Sciences") }}</option>
      <option value="Mathematics">Mathematics {{ abstractCountByCategory("topic","Mathematics") }}</option>
      <option
        value="Medicine and Health"
      >Medicine and Health {{ abstractCountByCategory("topic","Medicine and Health") }}</option>
      <option
        value="Physical Sciences"
      >Physical Sciences {{ abstractCountByCategory("topic","Medicine and Health") }}</option>
      <option
        value="Social Sciences"
      >Social Sciences {{ abstractCountByCategory("topic","Social Sciences") }}</option>
      <option value="Technology">Technology {{ abstractCountByCategory("topic","Technology") }}</option>
    </select>

    <p class="abstract__metadata-header">Chronology</p>
    <select v-model="chronology">
      <option disabled value>Please select one</option>
      <option value="All">All</option>
      <option
        value="Cultural and cross-cultural contexts, including colonialism in general"
      >Cultural and cross-cultural contexts {{ abstractCountByCategory("chronology","Cultural and cross-cultural contexts, including colonialism in general") }}</option>
      <option
        value="Longue Durée"
      >Longue Durée {{ abstractCountByCategory("chronology","Longue Durée") }}</option>
      <option
        value="Prehistory and early human societies"
      >Prehistory and early human societies {{ abstractCountByCategory("chronology","Prehistory and early human societies") }}</option>
      <option
        value="Ancient Near Eastern"
      >Ancient Near Eastern {{ abstractCountByCategory("chronology","Ancient Near Eastern") }}</option>
      <option
        value="Ancient Greek and Roman"
      >Ancient Greek and Roman {{ abstractCountByCategory("chronology","Ancient Greek and Roman") }}</option>
      <option
        value="Chinese Dynasties/Centuries"
      >Chinese Dynasties/Centuries {{ abstractCountByCategory("chronology","Chinese Dynasties/Centuries") }}</option>
      <option value="Medieval">Medieval {{ abstractCountByCategory("chronology","Medieval") }}</option>
      <option
        value="Pre-Colonial"
      >Pre-Colonial {{ abstractCountByCategory("chronology","Pre-Colonial") }}</option>
      <option
        value="Pre-Columbian Americas"
      >Pre-Columbian Americas {{ abstractCountByCategory("chronology","Pre-Columbian Americas") }}</option>
      <option
        value="Renaissance"
      >Renaissance {{ abstractCountByCategory("chronology","Renaissance") }}</option>
      <option
        value="Early Modern"
      >Early Modern {{ abstractCountByCategory("chronology","Early Modern") }}</option>
      <option
        value="Seventeenth century"
      >Seventeenth century {{ abstractCountByCategory("chronology","Seventeenth century") }}</option>
      <option
        value="Eighteenth century"
      >Eighteenth century {{ abstractCountByCategory("chronology","Eighteenth century") }}</option>
      <option
        value="Nineteenth century"
      >Nineteenth century {{ abstractCountByCategory("chronology","Nineteenth century") }}</option>
      <option
        value="Twentieth century, early"
      >Twentieth century, early {{ abstractCountByCategory("chronology","Twentieth century, early") }}</option>
      <option
        value="Twentieth century, late"
      >Twentieth century, late {{ abstractCountByCategory("chronology","Twentieth century, late") }}</option>
      <option
        value="Twenty-first century"
      >Twenty-first century {{ abstractCountByCategory("chronology","Twenty-first century") }}</option>
    </select>

    <p class="abstract__metadata-header">Geography</p>
    <select v-model="geography">
      <option disabled value>Please select one</option>
      <option value="All">All</option>
      <option value="Africa">Africa {{ abstractCountByCategory("geography","Africa") }}</option>
      <option
        value="Australasia/Oceania"
      >Australasia/Oceania {{ abstractCountByCategory("geography","Australasia/Oceania") }}</option>
      <option
        value="Central Asia"
      >Central Asia {{ abstractCountByCategory("geography","Central Asia") }}</option>
      <option value="East Asia">East Asia {{ abstractCountByCategory("geography","East Asia") }}</option>
      <option value="Europe">Europe {{ abstractCountByCategory("geography","Europe") }}</option>
      <option
        value="Latin America"
      >Latin America {{ abstractCountByCategory("geography","Latin America") }}</option>
      <option
        value="Near and Middle East"
      >Near and Middle East {{ abstractCountByCategory("geography","Near and Middle East") }}</option>
      <option
        value="North America"
      >North America {{ abstractCountByCategory("geography","North America") }}</option>
      <option value="South Asia">South Asia {{ abstractCountByCategory("geography","South Asia") }}</option>
      <option
        value="Southeast Asia"
      >Southeast Asia {{ abstractCountByCategory("geography","Southeast Asia") }}</option>
      <option
        value="Global or Multilocational"
      >Global or Multilocational {{ abstractCountByCategory("geography","Global or Multilocational") }}</option>
    </select>
    <button class="filters__btn" @click="resetAllFilters()">Reset All Filters</button>

    <h2 class="filters__header">Selected Filters</h2>
    <p class="filters__item">Results: {{ abstractCount }}</p>
    <div class="filters__container">
      <p v-if="topic" class="filters__item">
        <archive-icon />
        {{ topic }}
      </p>
      <p v-if="chronology" class="filters__item">
        <clock-icon />
        {{ chronology }}
      </p>
      <p v-if="geography" class="filters__item">
        <map-pin-icon />
        {{ geography }}
      </p>
    </div>

    <h2 class="abstract__header">Abstracts</h2>
    <div class="abstract__container">
      <div v-if="abstractCount">
        <transition-group name="abstracts" tag="div" mode="in-out">
          <article v-for="({ node }, idx) in abstractFilter" :key="node.id">
            <div class="abstract__item">
              <div class="abstract__number">{{ idx + 1 }}</div>
              <div class="abstract__item--top">
                <div class="abstract__title">
                  <h2>{{ node.title }}</h2>
                </div>
                <div class="abstract__author">
                  <p>{{ properCase(node.author.last) }}, {{ firstLetter(node.author.first) }}.</p>
                </div>
              </div>
              <div class="abstract__item--bottom">
                <div class="abstract__metadata">
                  <archive-icon class="abstract__metadata--icon" />
                  <p class="abstract__metadata-item">{{ node.metadata.topic }}</p>
                </div>
                <div class="abstract__metadata">
                  <clock-icon class="abstract__metadata--icon" />
                  <p class="abstract__metadata-item">{{ node.metadata.chronology }}</p>
                </div>
                <div class="abstract__metadata">
                  <map-pin-icon class="abstract__metadata--icon" />
                  <p class="abstract__metadata-item">{{ node.metadata.geography }}</p>
                </div>
              </div>
            </div>
            <full-abstract
              :title="node.title"
              :abstract="node.abstract"
              :authorLast="node.author.last"
              :authorFirst="node.author.first"
              :keywords="node.metadata.keywords"
            />
          </article>
        </transition-group>
      </div>
      <div v-else>
        <div class="abstract__alert">
          <alert-circle-icon />
          <p>No abstracts found!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  UserIcon,
  AlertCircleIcon,
  ArchiveIcon,
  ClockIcon,
  MapPinIcon
} from "vue-feather-icons";
import fullAbstract from "~/components/fullAbstract.vue";

export default {
  data() {
    return {
      topic: "All",
      chronology: "All",
      geography: "All",
      showAbstract: false
    };
  },
  components: {
    UserIcon,
    AlertCircleIcon,
    fullAbstract,
    ArchiveIcon,
    ClockIcon,
    MapPinIcon
  },
  methods: {
    properCase(input) {
      return input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
    },
    firstLetter(input) {
      return input.charAt(0).toUpperCase();
    },
    toggleAbstract(e) {
      e.currentTarget.nextSibling.classList.toggle("show");
    },
    abstractCountByCategory(label, category) {
      const result = this.abstractFilter.filter(abstract => {
        return abstract.node.metadata[label] === category;
      });
      const number = result.length;
      return `(${number})`;
    },
    resetAllFilters() {
      this.topic = "All";
      this.chronology = "All";
      this.geography = "All";
    }
  },
  computed: {
    abstractFilter() {
      if (
        this.topic === "All" &&
        this.chronology === "All" &&
        this.geography === "All"
      ) {
        return this.$static.allAbstracts.edges;
      }

      const absFilter = (filterName, category, items) => {
        if (filterName === "All") {
          return items;
        }
        return items.filter(
          item => item.node.metadata[category] === filterName
        );
      };

      const topicAbstracts = absFilter(
        this.topic,
        "topic",
        this.$static.allAbstracts.edges
      );

      const chronologyAbstracts = absFilter(
        this.chronology,
        "chronology",
        topicAbstracts
      );

      const geographyAbstracts = absFilter(
        this.geography,
        "geography",
        chronologyAbstracts
      );

      return geographyAbstracts;
    },
    abstractCount() {
      return this.abstractFilter.length;
    }
  }
};
</script>

<static-query>
query {
  allAbstracts(sortBy: "title", order: ASC) {
    totalCount
    edges {
      node {
        id,
        title
        abstract,
        metadata {
          topic,
          chronology,
          geography,
          keywords
        },
        author {
          name,
          first,
          last
        }
      }
    }
  }
}
</static-query>
<style lang="scss" scoped>
select {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.9rem;
  width: 100%;
  padding: 0.25rem;
}
section {
  padding-bottom: 800px;
}

.filters {
  &__header {
    margin-bottom: 0;
  }
  &__btn {
    display: inline-block;
    border: 1px solid currentColor;
    cursor: pointer;
    font-family: "Open Source Sans", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    background: none;
    color: currentColor;
    font-size: 0.9rem;
    margin: 1rem 0;
    padding: 0.25rem;
  }
  &__container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  &__item {
    display: flex;
    font-size: 0.9rem;
    align-items: center;
    line-height: 1;
    margin: 0;
    padding: 5px 8px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    svg {
      height: 14px;
      width: 14px;
      stroke-width: 2px;
      margin-right: 2px;
      opacity: 0.75;
      flex-shrink: 0;
    }
  }
}

.abstract {
  &__alert {
    display: flex;
    align-items: center;
    p {
      margin-left: 0.25rem;
    }
  }
  &__metadata-header {
    margin: 0.75rem 0 0;
    font-size: 0.85rem;
  }
  &__header {
    margin-bottom: 0;
  }
  &__container {
    margin-top: 0.5rem;
  }
  &__number {
    font-size: 14px;
    font-weight: 900;
    transform: translate3d(-20px, 30px, 0);
  }
  &__item {
    &--top,
    &--bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
    }
    &--top {
      @include border($all: true);
    }
    &--bottom {
      @include border($all: true);
      border-top: none;
    }
  }
  &__title {
    display: flex;
    align-items: center;
    @include border(right);
    padding: 0.25rem 0.5rem;
    width: 75%;
    height: 100%;
    & > h2 {
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.2;
      white-space: nowrap;
      font-size: 1rem;
      font-weight: 600;
    }

    .dark & {
      //   background-color: rgb(50, 50, 50);
    }
    .bright & {
      //   background-color: rgb(194, 193, 193);
    }
  }
  &__author {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0.25rem 0.5rem;
    width: 25%;
    & > p {
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.2;
      white-space: nowrap;
      font-size: 1rem;
    }

    .dark & {
      //   background-color: rgb(60, 60, 60);
    }
    .bright & {
      //   background-color: rgb(204, 204, 204);
    }
  }
  &__metadata {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 0.25rem 0.5rem;
    width: 33%;
    height: 100%;
    &:nth-child(2) {
      @include border(left);
    }
    &:last-child {
      //   border-left: 1px solid currentColor;
      @include border(left);
    }
    &--icon {
      flex-shrink: 0;
      margin-top: 0.06em;
      margin-right: 2px;
      width: 0.75rem;
      height: 0.75rem;
      stroke-width: 1;
    }
  }
  &__metadata-item {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
    white-space: nowrap;
    font-size: 0.8rem;
  }
}

.abstracts-enter-active,
.abstracts-leave-active {
  transition: all 0.4s;
}
.abstracts-enter, .abstracts-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.abstracts-move {
  transition: opacity 0.2s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>