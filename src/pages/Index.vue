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
        <Shortcut link="/welcome/" text="Welcome" icon="home-icon" />
        <Shortcut link="/cfp/" text="Submit an Abstract" icon="edit-icon" />
        <Shortcut
          link="/support/"
          text="Advertise at HSS"
          icon="message-square-icon"
        />
      </nav>
    </div>
    <div class="full-width">
      <div class="upcoming-dates">
        <alert-circle-icon class="upcoming-dates__icon" />
        <div class="upcoming-dates__text">
          <p class="upcoming-dates__title">Abstract Submission Deadline:</p>
          <p class="upcoming-dates__date">
            <time datetime="2020-03-01">1 March 2020 (23:59 EST)</time>
          </p>
        </div>
      </div>
    </div>
    <p class="tagline">{{ this.tagline }}</p>
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
import { MapIcon, CalendarIcon, AlertCircleIcon } from "vue-feather-icons";

export default {
  components: {
    GitLink,
    Shortcut,
    MapIcon,
    CalendarIcon,
    AlertCircleIcon
  },
  data() {
    return {
      description: "History of Science Society Annual Meeting",
      date: "8-11 October 2020",
      location: "New Orleans, LA, USA",
      tagline: "Telling the Stories of Science since 1924"
    };
  },
  metaInfo() {
    return {
      title: "HSS 2020",
      meta: [
        {
          key: "description",
          name: "description",
          content: `${this.description} | ${this.date} | ${this.location} | ${this.tagline}`
        },
        { itemprop: "name", content: "HSS 2020" },
        {
          itemprop: "description",
          content: `${this.description} | ${this.date} | ${this.location} | ${this.tagline}`
        },
        {
          itemprop: "image",
          content: "https://hssmeeting.org/hssMeta.jpg"
        },
        { property: "og:title", content: "HSS 2020" },
        { property: "og:url", content: "https://hssmeeting.org" },
        {
          property: "og:description",
          content: `${this.description} | ${this.date} | ${this.location} | ${this.tagline}`
        },
        {
          property: "og:image",
          content: "https://hssmeeting.org/hssMeta.jpg"
        },
        { name: "twitter:title", content: "HSS 2020" },
        {
          name: "twitter:description",
          content: `${this.description} | ${this.date} | ${this.location} | ${this.tagline}`
        },
        {
          name: "twitter:image",
          content: "https://hssmeeting.org/hssMeta.jpg"
        },
        { name: "twitter:site", content: "@hssonline" },
        { name: "twitter:creator", content: "@theroyalfig" },
        { name: "twitter:card", content: "summary_large_image" }
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
    align-items: center;

    svg {
      height: 1rem;
      width: 1rem;
      margin-right: 0.25rem;
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

.tagline {
  margin: 3em auto 0;
  font-style: italic;
  text-align: center;
}
.full-width {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.upcoming-dates {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 8px 15px;
  border-radius: 3px;
  background-color: #663333;
  color: #fff;

  &__icon {
    height: 50px;
    width: 50px;
    margin-right: 0.5rem;
  }

  &__text {
    display: flex;
    flex-wrap: wrap;
  }

  &__title,
  &__date {
    margin: 0 0.5rem;
    font-size: 1.2em;
  }
}
</style>
