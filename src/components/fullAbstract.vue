<template>
  <section class="abstract-full">
    <button class="abstract-full__button" @click="toggleAbstract($event)">
      <arrow-down-circle-icon class="abstract-full__icon" id="abstract-toggle-icon" />
      <span v-if="!showAbstract">Read More</span>
      <span v-else>Close Abstract</span>
    </button>
    <transition name="slide-down">
      <div v-if="showAbstract" class="abstract-full__container">
        <p class="abstract-full__title">
          <strong>{{ title }}</strong>
        </p>
        <p class="abstract-full__author">{{ authorFirst }} {{ authorLast }}</p>
        <p class="abstract-full__abstract">{{ abstract }}</p>
      </div>
    </transition>
  </section>
</template>

<script>
import { ArrowDownCircleIcon } from "vue-feather-icons";
export default {
  components: {
    ArrowDownCircleIcon
  },
  data() {
    return {
      showAbstract: false,
      iconValue: "Read More"
    };
  },
  props: ["title", "abstract", "authorFirst", "authorLast"],
  methods: {
    toggleAbstract(e) {
      this.showAbstract = !this.showAbstract;
      const button = e.target.parentNode.querySelector("svg");

      button.classList.toggle("rotated");
    }
  }
};
</script>

<style lang="scss" scoped>
.abstract-full {
  margin-bottom: 1rem;

  &__button {
    background: none;
    border: none;
    color: currentColor;
    font-family: "Opens Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 0.9rem;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.25rem;
    margin-left: auto;
    border-radius: 4px;
    margin-top: -5px;
    padding-top: 5px;
    z-index: 0;
    position: relative;
    .dark & {
      background-color: rgb(60, 60, 60);
    }
    .bright & {
      background-color: rgb(204, 204, 204);
    }
  }

  &__icon {
    margin-right: 0.25rem;
    height: 1em;
    width: 1em;
    transition: transform 0.2s ease-in-out;
  }

  &__container {
    background: #eeeeee;
    border-radius: 4px;
    color: $textBright;
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
  }
}
.rotated {
  transition: transform 0.2s ease-in-out;
  transform: rotate(-180deg);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.1s ease-in-out;
  height: 800px;
}
.slide-down-enter,
.slide-down-leave-to {
  height: 0;
  transition: all 0.1s ease-in-out;
}
</style>