<template>
  <div class="abstract-full">
    <div class="abstract-full__button-bar">
      <div class="abstract-full__keywords">
        <div v-for="(kw,idx) in computedKeywords" :key="idx" class="abstract-full__icon">
          <hash-icon />
          <p>{{ kw }}</p>
        </div>
      </div>
      <button class="abstract-full__button" @click="toggleAbstract($event)">
        <div class="abstract-full__icon">
          <arrow-down-circle-icon class="abstract-toggle-icon" />
        </div>
        <span v-if="!showAbstract">Read More</span>
        <span v-else>Close Abstract</span>
      </button>
    </div>
    <transition name="slide-down">
      <div v-if="showAbstract" class="abstract-full__container">
        <p class="abstract-full__title">
          <strong>{{ title }}</strong>
        </p>
        <p class="abstract-full__author">{{ authorFirst }} {{ authorLast }}</p>
        <p class="abstract-full__abstract">{{ abstract }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { ArrowDownCircleIcon, HashIcon } from "vue-feather-icons";
export default {
  components: {
    ArrowDownCircleIcon,
    HashIcon
  },
  data() {
    return {
      showAbstract: false,
      iconValue: "Read More"
    };
  },
  props: ["title", "abstract", "authorFirst", "authorLast", "keywords"],
  methods: {
    toggleAbstract(e) {
      this.showAbstract = !this.showAbstract;
      const button = e.target.parentNode.querySelector(".abstract-toggle-icon");
      button.classList.toggle("rotated");
    }
  },
  computed: {
    computedKeywords() {
      const keywordArray = [];
      const keywords = this.keywords.replace(/(;)\S/g, "; ").split("; ");
      keywords.forEach(element => {
        keywordArray.push(element);
      });
      const threeKeywords = keywordArray.slice(0, 3);
      return threeKeywords;
    }
  }
};
</script>

<style lang="scss" scoped>
.abstract-full {
  margin-bottom: 1rem;
  &__button-bar {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    border: 1px solid currentColor;
    border-top: none;
    height: 40px;
    .dark & {
    }
    .bright & {
    }
  }
  &__keywords {
    flex: 75%;
    margin: 0;
    padding: 0.25rem 0.5rem;
    height: 100%;
    overflow: hidden;
    line-height: 1.2;
    white-space: nowrap;
    font-size: 0.8rem;

    .abstract-full__icon svg {
      height: 0.5rem;
      width: 0.5rem;
      top: 0.3em;
    }
    p {
      margin: 0 0.25em 0 0;
    }
  }
  &__button {
    background: none;
    border: none;
    color: currentColor;
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    cursor: pointer;
    margin-left: auto;
    vertical-align: text-bottom;
    z-index: 0;
    position: relative;
    padding: 0.25rem 0.5rem;
    margin: 0;
    width: 115px;
    height: 100%;

    &:hover,
    &:focus {
      outline: none;

      .dark & {
        background-color: $sidebarBright;
        color: $textBright;
      }
      .bright & {
        background-color: $sidebarDark;
        color: $textDark;
      }
    }
  }

  &__icon {
    display: inline-flex;
    align-self: center;
    margin-right: 2px;
    svg {
      position: relative;
      top: 0.125em;
      transition: transform 0.2s ease-in-out;
      height: 1em;
      width: 1em;
    }
  }

  &__container {
    border: 1px solid currentColor;
    border-top: none;
    padding: 0.5rem 1rem;
    color: $textBright;
  }
}
.rotated {
  transition: transform 0.2s ease-in-out;
  transform: rotate(-180deg);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.1s ease-in-out;
  opacity: 1;
}
.slide-down-enter,
.slide-down-leave-to {
  opacity: 0;
  transition: all 0.1s ease-in-out;
}
</style>