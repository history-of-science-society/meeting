<template>
  <Layout>
    <h1>{{ $page.doc.title }}</h1>
    <VueRemarkContent class="markdown" />
  </Layout>
</template>

<page-query>
query Doc ($path: String!) {
  doc: doc (path: $path) {
    title
    path
    date (format: "D. MMMM YYYY")
    description

    content
  }
}
</page-query>

<script>
import Date from "~/components/dateAndLocation.vue";

export default {
  components: {
    Date,
  },
  metaInfo() {
    return {
      title: this.$page.doc.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.doc.description,
        },
        { itemprop: "name", content: "HSS 2020" },
        { itemprop: "description", content: this.$page.doc.description },
        {
          itemprop: "image",
          content: "https://hssmeeting.org/hssMeta.jpg",
        },
        { property: "og:title", content: "HSS 2020" },
        { property: "og:url", content: "https://hssmeeting.org" },
        { property: "og:description", content: this.$page.doc.description },
        {
          property: "og:image",
          content: "https://hssmeeting.org/hssMeta.jpg",
        },
        { name: "twitter:title", content: "HSS 2020" },
        { name: "twitter:description", content: this.$page.doc.description },
        {
          name: "twitter:image",
          content: "https://hssmeeting.org/hssMeta.jpg",
        },
        { name: "twitter:site", content: "@hssonline" },
        { name: "twitter:creator", content: "@theroyalfig" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
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
