<template>
  <div>
    <p v-if="topic || chronology || geography || keywords" class="label">
      Metadata
    </p>
    <div class="metadata">
      <div v-if="topic">
        <folder-icon size="1x" class="icon" aria-hidden="true" />
        <p>{{ topic }}</p>
      </div>
      <div v-if="chronology">
        <clock-icon size="1x" class="icon" aria-hidden="true" />
        <p>
          {{ chronology }}
        </p>
      </div>
      <div v-if="geography">
        <globe-icon size="1x" class="icon" aria-hidden="true" />
        <p>
          {{ geography }}
        </p>
      </div>
    </div>
    <div class="metadata">
      <div v-for="(keyword, idx) in keywordParser(keywords)" :key="idx">
        <hash-icon size="1x" class="icon--no-space" />
        <p>
          {{ keyword }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { FolderIcon, ClockIcon, GlobeIcon, HashIcon } from "vue-feather-icons";

export default {
  components: {
    FolderIcon,
    ClockIcon,
    GlobeIcon,
    HashIcon,
  },
  props: ["topic", "chronology", "geography", "keywords"],
  methods: {
    keywordParser(input) {
      if (!input) {
        return "";
      }
      const arr = input.split(";");
      const uppercased = arr.map((x) => {
        if (x === "") {
          return;
        }
        return x.toLowerCase();
      });
      return uppercased;
    },
  },
};
</script>

<style lang="scss" scoped>
.metadata {
  display: flex;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    padding: 0.25rem;
    margin: 0.25rem 0.25rem 0.25rem 0;
    font-size: 15px;
    border-radius: 9px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    .dark & {
      border: 1px solid $sidebarDark;
    }
    .bright & {
      border: 1px solid $sidebarBright;
    }
  }
  p {
    margin: 0;
  }
}

.icon {
  margin-right: 5px;
  opacity: 0.5;
  &--no-space {
    opacity: 0.5;
  }
}
</style>
