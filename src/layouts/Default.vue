<template>
  <div class="site">
    <Header :menuToggle="sidebar" />
    <Sidebar v-if="sidebar" />
    <main
      class="main"
      :class="{
        'main--no-sidebar': !sidebar,
        'main--sidebar-is-open': this.$store.state.sidebarOpen
      }"
    >
      <slot />
    </main>
    <!-- <Donate /> -->
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "~/components/Header.vue";
import Sidebar from "~/components/Sidebar.vue";
import Donate from "~/components/donateBtn.vue";

export default {
  components: {
    Header,
    Sidebar,
    Donate
  },
  props: {
    sidebar: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.$store.commit("closeSidebar");
    if (process.isClient) {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js").then(function() {
          console.log("Service Worker Registered");
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.site {
  overflow: hidden;
}
.main {
  max-width: 800px;
  padding: 100px 30px 30px 30px;
  transition: transform 0.15s ease-in-out;

  @include respond-above(sm) {
    width: calc(100% - 300px);
    padding: 100px 30px 30px;
    transform: translateX(300px);
  }

  @include respond-above(md) {
    padding: 100px 80px 30px;
  }

  &--no-sidebar {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    transform: translate(0);
  }

  &--sidebar-is-open {
    transform: translate(300px);
  }
}
</style>
