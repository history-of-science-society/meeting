<template>
  <Layout>
    <date />
    <h1>
      {{ $page.doc.title }}
    </h1>
    <div class="markdown" v-html="$page.doc.content" />
  </Layout>
</template>

<page-query>
query Doc ($path: String!) {
  doc: doc (path: $path) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    content
  }
}
</page-query>

<script>
import Date from "~/components/dateAndLocation.vue";

export default {
  components: {
    Date
  },
  metaInfo() {
    return {
      title: this.$page.doc.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.doc.description
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
/deep/ > h2 {
  padding-top: 100px;
  margin-top: -80px;

  @include respond-above(md) {
    font-size: 2rem;
  }
}

.markdown {
  padding-bottom: 50vh;
}
</style>
