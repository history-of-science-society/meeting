<template>
  <a :href="link" class="external-link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  }
};
</script>
