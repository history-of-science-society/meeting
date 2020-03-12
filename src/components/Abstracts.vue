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
          <section v-for="{ node } in abstractFilter" :key="node.id">
            <div class="abstract__item">
              <div class="abstract__item--top">
                <h2 class="abstract__title">{{ node.title }}</h2>
                <p
                  class="abstract__author"
                >{{ properCase(node.author.last) }}, {{ firstLetter(node.author.first) }}.</p>
              </div>
              <div class="abstract__item--bottom">
                <p class="abstract__metadata-item">{{ node.metadata.topic }}</p>
                <p class="abstract__metadata-item">{{ node.metadata.chronology }}</p>
                <p class="abstract__metadata-item">{{ node.metadata.geography }}</p>
              </div>
            </div>
            <full-abstract
              :title="node.title"
              :abstract="node.abstract"
              :authorLast="node.author.last"
              :authorFirst="node.author.first"
            />
          </section>
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
        console.log(filterName, category, items);
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
    border-radius: 4px;
    cursor: pointer;

    &--top,
    &--bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  &__title {
    z-index: 5;
    margin: 0;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
    white-space: nowrap;
    font-weight: 600;
    font-size: 1rem;
    @include box-shadow($small: true);

    .dark & {
      background-color: rgb(50, 50, 50);
    }
    .bright & {
      background-color: rgb(194, 193, 193);
    }
  }
  &__author {
    position: relative;
    z-index: 6;
    margin: 0;
    left: -5px;
    margin-right: -5px;
    font-size: 1rem;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    width: calc(25% + 5px);
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
    white-space: nowrap;
    @include box-shadow($small: true);
    .dark & {
      background-color: rgb(60, 60, 60);
    }
    .bright & {
      background-color: rgb(204, 204, 204);
    }
  }
  &__metadata-item {
    flex: 1;
    transform: translate3d(0, -2px, 0);
    z-index: 1;
    margin: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    position: relative;
    padding: calc(0.25rem + 2px) 0.5rem 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
    white-space: nowrap;
    font-size: 0.9rem;

    @include box-shadow($small: true);

    &:nth-child(2) {
      left: -5px;
      margin-right: -5px;
    }
    &:nth-child(3) {
      border-radius: 4px;
      left: -5px;
      margin-right: -5px;
    }
    .dark & {
      background-color: hsl(252, 14%, 50%);
    }
    .bright & {
      background-color: hsl(252, 44%, 90%);
    }
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