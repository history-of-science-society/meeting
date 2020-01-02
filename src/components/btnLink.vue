<template>
  <a :href="link" class="btn-link" target="_blank" rel="noopener">
    <slot></slot>
    <external-link-icon />
  </a>
</template>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";

export default {
  components: {
    ExternalLinkIcon
  },
  props: {
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.btn-link {
  padding: 0.25rem 0.5rem;
  margin: 1rem 0;

  svg {
    height: 1rem;
    margin-left: 1px;
    transform: translateY(0.15em);
  }
}
</style>
