<template>
  <Layout :sidebar="false">
    <div class="content">
      <p class="subheader">The Annual Meeting of the</p>
      <h1>{{ $static.metadata.siteName }}</h1>

      <div class="subheader">
        <div>
          <calendar-icon class="icon" />
          {{ this.date }}
        </div>
        <div>
          <map-icon class="icon" />
          {{ this.location }}
        </div>
      </div>
      <nav>
        <!-- To use other icons here, you need to import them in the Shortcut component -->
        <Shortcut link="/cfp" text="Submit an Abstract" icon="edit-icon" />
        <Shortcut
          link="/support#advertise-print--digital"
          text="Advertise at HSS"
          icon="message-square-icon"
          class="support"
        />
        <Shortcut
          link="/cfp#find-a-collaborator"
          text="Find a Collaborator"
          icon="user-plus-icon"
        />
      </nav>
    </div>
    <p class="tagline">{{ this.description }}</p>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import GitLink from "~/components/GitLink.vue";
import Shortcut from "~/components/Shortcut.vue";
import { MapIcon, CalendarIcon } from "vue-feather-icons";

export default {
  components: {
    GitLink,
    Shortcut,
    MapIcon,
    CalendarIcon
  },
  data() {
    return {
      description: "Telling the Stories of Science since 1924",
      date: "8-11 October 2020",
      location: "New Orleans, LA, USA"
    };
  },
  metaInfo() {
    return {
      title: this.description,
      meta: [
        {
          key: "description",
          name: "description",
          content: `${this.description} | ${this.date} | ${this.location}`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}

p.subheader {
  margin: 1.5rem auto 0.5rem;
  font-weight: 400;
  text-transform: uppercase;
}

h1 {
  font-family: "Adobe Garamond Pro", "Hoefler", "Garamond", "Times New Roman",
    Times, serif;
  letter-spacing: 3px;
  margin-top: 3px;
}

h1,
.subheader {
  max-width: 600px;
  margin: 0 auto 1rem;
  text-align: center;

  @include respond-above(md) {
    max-width: 1000px;
  }
}

.subheader {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto 4rem;
  font-size: 1.25rem;
  line-height: 1.2;
  // color: $volta;

  @include respond-above(md) {
    font-size: 1.5rem;
  }

  div {
    margin: 0 0.75em;
    display: flex;

    svg {
      height: 1rem;
      width: 1rem;
      margin-right: 0.15rem;
      stroke-width: 1px;

      @include respond-above(md) {
        height: 2rem;
        width: 2rem;
      }
    }
  }
}

h2 {
  font-size: 1.3rem;
  margin: 0;
}

nav {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @include respond-above(sm) {
    flex-direction: row;
  }
}

.disabled {
  opacity: 0.5;
}

.tagline {
  margin: 3em auto 0;
  font-style: italic;
  text-align: center;
}
</style>
