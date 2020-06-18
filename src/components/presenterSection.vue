<template>
  <div v-if="author">
    <p v-if="num" class="label">Presenter {{ num }}</p>
    <p v-else class="label">Commentator</p>
    <p v-if="title" class="title">{{ title }}</p>
    <p class="name">{{ author }}</p>
    <p class="affiliation">{{ institution }}</p>
    <p v-if="coauthor" class="name">{{ coauthor }}</p>
    <p v-if="coinstitution" class="affiliation">{{ coinstitution }}</p>
  </div>
</template>

<script>
export default {
  props: ["num", "title", "author", "institution", "coauthor", "coinstitution"]
};
</script>

<style lang="scss" scoped>
.title {
  margin: 0.5rem 0;
  font-weight: 700;
  line-height: 1.2;
}
</style>