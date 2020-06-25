<template>
  <div class="container" v-if="author">
    <p v-if="num" class="label">Presenter {{ num }}</p>
    <p v-else class="label">Commentator</p>
    <p v-if="title" class="title">{{ title }}</p>
    <p class="name">{{ author }}</p>
    <p class="affiliation">{{ institution }}</p>
    <p v-if="coauthor" class="name">{{ coauthor }}</p>
    <p v-if="coinstitution" class="affiliation">{{ coinstitution }}</p>
    <div v-if="abstract" class="abstract">
      <p class="label">Abstract</p>
      <p v-html="abstract"></p>
    </div>
    <metadata-parser
      :topic="topic"
      :chronology="chronology"
      :geography="geography"
      :keywords="keywords"
    />
  </div>
</template>

<script>
import metadataParser from "./metadataParser";
export default {
  components: {
    metadataParser,
  },
  props: [
    "num",
    "title",
    "author",
    "institution",
    "coauthor",
    "coinstitution",
    "abstract",
    "chronology",
    "topic",
    "geography",
    "keywords",
  ],
};
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 1rem;
}
.title {
  margin: 0.5rem 0;
  font-weight: 700;
  line-height: 1.2;
}

.label + p {
  margin-top: 0.25rem;
}
</style>
