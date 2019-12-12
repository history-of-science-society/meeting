<template>
  <a :href="link" class="external-link" target="_blank" rel="noopener">
    <slot></slot>
  </a>
</template>

<script>
// import { ExternalLinkIcon } from "vue-feather-icons";

export default {
  // components: {
  //   ExternalLinkIcon
  // },
  props: {
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.external-link {
  svg {
    height: 1rem;
    margin-left: 1px;
    transform: translateY(0.15em);
  }
}
</style>
