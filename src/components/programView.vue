<template>
  <div>
    <div class="controls group-container">
      <h3>Controls</h3>
      <p class="view-label">Change program view</p>
      <div class="view-control">
        <button
          v-on:click="switchState('expanded')"
          :class="{ active: state === true }"
        >
          <plus-circle-icon />
          <span>Expanded</span>
        </button>
        <button
          v-on:click="switchState('simple')"
          :class="{ active: state === false }"
        >
          <minus-circle-icon />
          <span>Simple</span>
        </button>
      </div>
      <p class="view-label">Filter program by group</p>
      <div class="view-control">
        <button
          v-on:click="group = 'all'"
          class="group-view"
          :class="{ active: group === 'all' }"
        >
          All
        </button>
        <button
          v-on:click="group = '1'"
          class="group-view"
          :class="{ active: group === '1' }"
        >
          01
        </button>
        <button
          v-on:click="group = '2'"
          class="group-view"
          :class="{ active: group === '2' }"
        >
          02
        </button>
        <button
          v-on:click="group = '3'"
          class="group-view"
          :class="{ active: group === '3' }"
        >
          03
        </button>
        <button
          v-on:click="group = '4'"
          class="group-view"
          :class="{ active: group === '4' }"
        >
          04
        </button>
        <button
          v-on:click="group = '5'"
          class="group-view"
          :class="{ active: group === '5' }"
        >
          05
        </button>
        <button
          v-on:click="group = '6'"
          class="group-view"
          :class="{ active: group === '6' }"
        >
          06
        </button>
        <button
          v-on:click="group = '7'"
          class="group-view"
          :class="{ active: group === '7' }"
        >
          07
        </button>
        <button
          v-on:click="group = '8'"
          class="group-view"
          :class="{ active: group === '8' }"
        >
          08
        </button>
        <button
          v-on:click="group = '9'"
          class="group-view"
          :class="{ active: group === '9' }"
        >
          09
        </button>
        <button
          v-on:click="group = '10'"
          class="group-view"
          :class="{ active: group === '10' }"
        >
          10
        </button>
        <button
          v-on:click="group = '11'"
          class="group-view"
          :class="{ active: group === '11' }"
        >
          11
        </button>
        <button
          v-on:click="group = '12'"
          class="group-view"
          :class="{ active: group === '12' }"
        >
          12
        </button>
        <button
          v-on:click="group = '13'"
          class="group-view"
          :class="{ active: group === '13' }"
        >
          13
        </button>
      </div>
    </div>
    <div v-if="group === '1' || group === 'all'" class="group-container">
      <h3>Group 01</h3>
      <group-session :state="state" num="1" />
    </div>
    <div v-if="group === '2' || group === 'all'" class="group-container">
      <h3>Group 02</h3>
      <group-session :state="state" num="2" />
    </div>
    <div v-if="group === '3' || group === 'all'" class="group-container">
      <h3>Group 03</h3>
      <group-session :state="state" num="3" />
    </div>
    <div v-if="group === '4' || group === 'all'" class="group-container">
      <h3>Group 04</h3>
      <group-session :state="state" num="4" />
    </div>
    <div v-if="group === '5' || group === 'all'" class="group-container">
      <h3>Group 05</h3>
      <group-session :state="state" num="5" />
    </div>
    <div v-if="group === '6' || group === 'all'" class="group-container">
      <h3>Group 06</h3>
      <group-session :state="state" num="6" />
    </div>
    <div v-if="group === '7' || group === 'all'" class="group-container">
      <h3>Group 07</h3>
      <group-session :state="state" num="7" />
    </div>
    <div v-if="group === '8' || group === 'all'" class="group-container">
      <h3>Group 08</h3>
      <group-session :state="state" num="8" />
    </div>
    <div v-if="group === '9' || group === 'all'" class="group-container">
      <h3>Group 09</h3>
      <group-session :state="state" num="9" />
    </div>
    <div v-if="group === '10' || group === 'all'" class="group-container">
      <h3>Group 10</h3>
      <group-session :state="state" num="10" />
    </div>
    <div v-if="group === '11' || group === 'all'" class="group-container">
      <h3>Group 11</h3>
      <group-session :state="state" num="11" />
    </div>
    <div v-if="group === '12' || group === 'all'" class="group-container">
      <h3>Group 12</h3>
      <group-session :state="state" num="12" />
    </div>
    <div v-if="group === '13' || group === 'all'" class="group-container">
      <h3>Group 13</h3>
      <group-session :state="state" num="13" />
    </div>
  </div>
</template>

<script>
import groupSession from "./groupSession";
import { PlusCircleIcon, MinusCircleIcon } from "vue-feather-icons";

export default {
  components: {
    groupSession,
    PlusCircleIcon,
    MinusCircleIcon,
  },
  data() {
    return { state: true, group: "all" };
  },
  methods: {
    switchState(input) {
      if (input === "expanded") {
        this.state = true;
      }
      if (input === "simple") {
        this.state = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.controls {
  margin: 3rem 0;
}
.view-label {
  margin-bottom: 0.25rem;
  font-weight: 300;
}
.view-control {
  display: flex;

  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  margin: 0 0 1rem 0;
  border: 1px solid;
  border-radius: 9px;

  .dark & {
    border-color: $sidebarDark;
  }

  .bright & {
    border-color: $sidebarBright;
  }

  p {
    margin: 0 0.5rem 0 0;
  }
  button {
    position: relative;
    display: flex;

    align-items: center;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    background: none;
    border: 2px solid transparent;
    border-radius: 4px;
    outline: none;
    box-shadow: none;
    transition: all 0.2s ease-in-out;

    .dark & {
      color: $textDark;
      background: $sidebarDark;
    }
    .bright & {
      color: $textBright;
      background: $sidebarBright;
    }
    &:last-of-type {
      margin-right: 0;
    }
    span {
      margin-left: 0.5rem;
    }

    &.active,
    &:hover,
    &:focus {
      .dark & {
        border-color: $accent;
      }
      .bright & {
        border-color: $hss;
      }
    }
  }
}
.group-container h3 {
  padding-bottom: 0.5rem;
  border-bottom: 1px solid currentColor;
}
</style>
