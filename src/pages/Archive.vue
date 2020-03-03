<template>
  <Layout>
    <section>
      <h1>Abstract Archive</h1>
      <div class="abstract">
        <div class="abstract__item" v-for="{ node } in $page.allAbstracts.edges" :key="node.id">
          <div class="abstract__top">
            <h2 class="abstract__title">{{ node.title }}</h2>
            <p>{{ node.abstract }}</p>
            <div class="abstract__metadata">
              <p>{{ node.metadata.topic }}</p>
              <p>{{ node.metadata.chronology }}</p>
              <p>{{ node.metadata.geography }}</p>
              <p>{{ node.metadata.keywords }}</p>
            </div>
            <p>
              <user-icon />
              {{ properCase(node.author.first) }} {{ properCase(node.author.last) }}
            </p>
          </div>
        </div>
      </div>
      <Pager :info="$page.allAbstracts.pageInfo" />
    </section>
  </Layout>
</template>

<script>
import { Pager } from "gridsome";
import { UserIcon } from "vue-feather-icons";
export default {
  components: {
    Pager,
    UserIcon
  },
  methods: {
    properCase(input) {
      console.log(input);
      return input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
    }
  }
};
</script>

<page-query>
query ($page: Int) {
  allAbstracts(sortBy: "title", order: ASC, perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id,
        title
        abstract,
        metadata {
          topic,
          chronology,
          geography,
          keywords
        },
        author {
          name,
          first,
          last
        }
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.abstract {
  &__item {
    padding: 0 1rem;
    border: 1px solid currentColor;
    border-radius: 9px;
    margin-bottom: 1rem;
  }
  &__metadata {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>