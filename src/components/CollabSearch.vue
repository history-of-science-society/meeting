<template>
  <div>
    <h3>Open Sessions ({{ sessions }})</h3>
    <article class="collab-card" v-for="(data,idx) in collabs" :key="idx">
      <p class="collab-card__badge">{{ data['I\'m interested in...'] }}</p>
      <p class="collab-card__title">{{ data['Tentative Title'] }}</p>
      <p class="collab-card__small-title">Organizer</p>
      <a class="collab-card__name" :href="'mailto:'+data.Email+'?subject=HSS 2020 Collaboration'">
        {{ data['Name (First)'] }} {{ data['Name (Last)'] }}
        <mail-icon class="collab-card__mail-icon"></mail-icon>
      </a>
      <p class="collab-card__small-title">Abstract</p>
      <p
        class="collab-card__abstract"
      >{{ data['Session idea, abstract, or other information relevant for potential collaborators'] }}</p>
      <div class="collab-card__metabox">
        <div class="collab-card__fixed-cat">
          <p class="collab-card__metadata">
            <archive-icon />
            &nbsp;{{ data['Abstract Topic'] }}
          </p>
          <p class="collab-card__metadata">
            <clock-icon />
            {{ data['Abstract Chronology'] }}
          </p>
          <p class="collab-card__metadata">
            <map-icon />
            {{ data['Abstract Geography'] }}
          </p>
        </div>
        <p class="collab-card__metadata--full-width">
          <tag-icon />
          {{ data['Self-Designated Keywords'] }}
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
    }
  }
};
</script>

<style lang="scss" scoped>
.collab-card {
  border-radius: 6px;
  border: 1px solid currentColor;
  margin: 2rem 0;
  padding: 1rem;

  &__badge {
    border-radius: 6px;
    border: 1px solid currentColor;
    display: inline-block;
    margin: 0;
    padding: 2px 5px;
    transform: translateY(calc(-1em + -50%));

    .bright & {
      background: #ffb6b4;
    }
    .dark & {
      background: #663333;
    }
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.2;
    margin-top: -0.5em;
  }

  &__small-title {
    font-size: 0.75em;
    font-weight: 700;
    margin-bottom: 0;
    opacity: 0.65;
    text-transform: uppercase;
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
    height: 1rem;
    margin-left: 0.05rem;
    stroke-width: 2;
    transform: translateY(0.15rem);
    vertical-align: baseline;
    width: 1rem;
  }

  &__abstract {
    margin-top: 0;
  }
  &__metabox {
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
    font-size: 15px;
    justify-content: space-between;

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
    font-size: 1em;
    line-height: 1.2;
    margin: 0.25rem;
    padding: 5px 8px;

    &:last-child {
      margin-right: 0;
    }

    svg {
      height: 15px;
      transform: translateY(2px);
      width: 15px;
    }
    &--full-width {
      @extend .collab-card__metadata;
      width: 100%;
    }
  }

  &__notes {
    margin-bottom: 0;

    svg {
      height: 1rem;
      transform: translateY(2px);
      width: 1rem;
    }
  }
}
</style>