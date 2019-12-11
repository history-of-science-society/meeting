<template>
  <a :href="link" class="external-link">
    {{ text }}
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
    },
    text: {
      type: String
    }
  }
};
</script>
