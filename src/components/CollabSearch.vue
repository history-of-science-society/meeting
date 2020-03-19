<template>
  <div>
    <h3>Open Sessions ({{ sessions }})</h3>
    <article
      class="collab-card"
      v-for="(data, idx) in collabReversed"
      :key="idx"
    >
      <p class="collab-card__badge">{{ data["I'm interested in..."] }}</p>
      <p class="collab-card__title">{{ data["Tentative Title"] }}</p>
      <p class="collab-card__small-title">Organizer</p>
      <a
        class="collab-card__name"
        :href="'mailto:' + data.Email + '?subject=HSS 2020 Collaboration'"
      >
        {{ data["Name (First)"] }} {{ data["Name (Last)"] }}
        <mail-icon class="collab-card__mail-icon"></mail-icon>
      </a>
      <p class="collab-card__small-title">Abstract</p>
      <p
        class="collab-card__abstract"
        v-html="
          data[
            'Session idea, abstract, or other information relevant for potential collaborators'
          ]
        "
      ></p>
      <div class="collab-card__metabox">
        <div class="collab-card__fixed-cat">
          <p class="collab-card__metadata">
            <archive-icon />
            &nbsp;{{ data["Abstract Topic"] }}
          </p>
          <p class="collab-card__metadata">
            <clock-icon />
            {{ data["Abstract Chronology"] }}
          </p>
          <p class="collab-card__metadata">
            <map-icon />
            {{ data["Abstract Geography"] }}
          </p>
        </div>
        <p
          class="collab-card__metadata--full-width"
          v-if="data['Self-Designated Keywords']"
        >
          <tag-icon />
          {{ data["Self-Designated Keywords"] }}
        </p>
      </div>
      <p class="collab-card__notes" v-if="data.Notes">
        <edit-icon />
        {{ data.Notes }}
      </p>
    </article>
  </div>
</template>

<script>
import json from "./data/collab.json";
import {
  MailIcon,
  ClockIcon,
  TagIcon,
  MapIcon,
  ArchiveIcon,
  EditIcon
} from "vue-feather-icons";
export default {
  components: {
    MailIcon,
    ClockIcon,
    TagIcon,
    MapIcon,
    ArchiveIcon,
    EditIcon
  },
  data() {
    return {
      collabs: json
    };
  },
  computed: {
    sessions: function() {
      return this.collabs.length;
    },
    collabReversed: function() {
      return this.collabs.slice().reverse();
    }
  }
};
</script>

<style lang="scss" scoped>
.collab-card {
  padding: 1rem;
  margin: 2rem 0;
  border: 1px solid currentColor;
  border-radius: 6px;

  &__badge {
    display: inline-block;
    padding: 2px 5px;
    margin: 0;
    border: 1px solid currentColor;
    border-radius: 6px;
    transform: translateY(calc(-1em + -50%));

    .bright & {
      background: #ffb6b4;
    }
    .dark & {
      background: #663333;
    }
  }

  &__title {
    margin-top: -0.5em;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.2;
  }

  &__small-title {
    margin-bottom: 0;
    font-size: 0.75em;
    font-weight: 700;
    text-transform: uppercase;
    opacity: 0.65;
  }

  &__name {
    margin-top: 0;
    text-decoration: none;

    &:hover,
    &:focus {
      border-bottom: 1px solid currentColor;
    }
  }

  &__mail-icon {
    width: 1rem;
    height: 1rem;
    margin-left: 0.05rem;
    vertical-align: baseline;
    stroke-width: 2;
    transform: translateY(0.15rem);
  }

  &__abstract {
    margin-top: 0;
  }
  &__metabox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 15px;
    border-radius: 6px;

    .bright & {
      background: $sidebarBright;
    }

    .dark & {
      background: $sidebarDark;
    }
  }

  &__fixed-cat {
    @extend .collab-card__metabox;
    width: 100%;

    @include respond-above(sm) {
      flex-wrap: nowrap;
    }
  }

  &__metadata {
    flex: 1;
    padding: 5px 8px;
    margin: 0.25rem;
    font-size: 1em;
    line-height: 1.2;

    &:last-child {
      margin-right: 0;
    }

    svg {
      width: 15px;
      height: 15px;
      transform: translateY(2px);
    }
    &--full-width {
      @extend .collab-card__metadata;
      width: 100%;
    }
  }

  &__notes {
    margin-bottom: 0;

    svg {
      width: 1rem;
      height: 1rem;
      transform: translateY(2px);
    }
  }
}
</style>
