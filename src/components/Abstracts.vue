<template>
  <section>
    <p class="abstract__metadata-header">Topic</p>
    <select v-model="topic">
      <option disabled value>Please select one</option>
      <option>All</option>
      <option>Tools for Historians of Science</option>
      <option>Theoretical Approaches to the Study of Science</option>
      <option>Aspects of Scientific Practice/Organization</option>
      <option>Biology</option>
      <option>Chemistry</option>
      <option>Earth and Environmental Sciences</option>
      <option>Mathematics</option>
      <option>Medicine and Health</option>
      <option>Social Sciences</option>
      <option>Technology</option>
    </select>

    <p class="abstract__metadata-header">Chronology</p>
    <select v-model="chronology">
      <option disabled value>Please select one</option>
      <option>All</option>
      <option>Cultural and cross-cultural contexts, including colonialism in general</option>
      <option>Longue Durée</option>
      <option>Prehistory and early human societies</option>
      <option>Ancient Near Eastern</option>
      <option>Ancient Greek and Roman</option>
      <option>Chinese Dynasties/Centuries</option>
      <option>Medieval</option>
      <option>Pre-Colonial</option>
      <option>Pre-Columbian Americas</option>
      <option>Renaissance</option>
      <option>Early Modern</option>
      <option>Seventeenth century</option>
      <option>Eighteenth century</option>
      <option>Nineteenth century</option>
      <option>Twentieth century, early</option>
      <option>Twentieth century, late</option>
      <option>Twenty-first century</option>
    </select>

    <p class="abstract__metadata-header">Geography</p>
    <select v-model="geography">
      <option disabled value>Please select one</option>
      <option>All</option>
      <option>Africa</option>
      <option>Australasia/Oceania</option>
      <option>Central Asia</option>
      <option>East Asia</option>
      <option>Europe</option>
      <option>Latin America</option>
      <option>Near and Middle East</option>
      <option>North America</option>
      <option>South Asia</option>
      <option>Southeast Asia</option>
      <option>Global or Multilocational</option>
    </select>
    <p class="badge">Results: {{ abstractCount }}</p>

    <div class="abstract__container">
      <div v-if="abstractCount">
        <transition-group name="abstracts" tag="div" mode="in-out">
          <article v-for="{ node } in abstractFilter" :key="node.id">
            <div class="abstract__item">
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
                  <p class="abstract__metadata-item">{{ node.metadata.topic }}</p>
                </div>
                <div class="abstract__metadata">
                  <p class="abstract__metadata-item">{{ node.metadata.chronology }}</p>
                </div>
                <div class="abstract__metadata">
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
import { UserIcon, AlertCircleIcon } from "vue-feather-icons";
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
    fullAbstract
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
section {
  padding-bottom: 800px;
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
    margin: 0;
  }
  &__container {
    margin-top: 2rem;
  }
  &__item {
    // border-top-left-radius: 4px;
    // border-top-right-radius: 4px;

    &--top,
    &--bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
    }
    &--top {
      border: 1px solid currentColor;
    }
    &--bottom {
      border: 1px solid currentColor;
      border-top: none;
    }
  }
  &__title {
    display: flex;
    align-items: center;
    border-right: 1px solid currentColor;
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
      border-left: 1px solid currentColor;
    }
    &:last-child {
      border-left: 1px solid currentColor;
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