<template>
  <div class="card">
    <div class="card__item--exhibitor" v-for="{ node } in $static.sponsors.edges" :key="node.id">
      <div class="card__top">
        <g-image class="card__img--exhibitor" :src="node.logo" />
        <a class="card__link" :href="node.website">
          <p class="card__title">{{ node.name }}</p>
        </a>

        <p>{{ node.description }}</p>

        <div
          v-if="
            node.social.twitter ||
              node.social.facebook ||
              node.social.youtube ||
              node.social.instagram ||
              node.social.blog
          "
          class="card__social"
        >
          <p class="card__social-header">Social Media and Links</p>
          <a
            v-if="node.social.twitter"
            class="card__social-item--twitter"
            :href="node.social.twitter"
          >
            <twitter-icon class="card__icon" aria-label="twitter" />
            @{{
            extractEnd(node.social.twitter)
            }}
          </a>
          <a
            v-if="node.social.facebook"
            class="card__social-item--facebook"
            :href="node.social.facebook"
          >
            <facebook-icon class="card__icon" aria-label="facebook" />
            {{
            extractEnd(node.social.facebook)
            }}
          </a>
          <a
            v-if="node.social.youtube"
            class="card__social-item--youtube"
            :href="node.social.youtube"
          >
            <youtube-icon class="card__icon" aria-label="youtube" />
            {{
            extractEnd(node.social.youtube)
            }}
          </a>
          <a
            v-if="node.social.instagram"
            class="card__social-item--instagram"
            :href="node.social.instagram"
          >
            <instagram-icon class="card__icon" aria-label="instagram" />
            {{
            extractEnd(node.social.instagram)
            }}
          </a>
          <a v-if="node.social.blog" class="card__social-item--blog" :href="node.social.blog">
            <pen-tool-icon class="card__icon" aria-label="blog" />
            {{
            extractEnd(node.social.blog)
            }}
          </a>
        </div>
        <p
          v-if="node.books.title1Img || node.books.title3Url || node.books.title3Url"
          class="card__social-header"
        >Featured Titles</p>
        <div
          v-if="node.books.title1Img || node.books.title3Url || node.books.title3Url"
          class="card__featured-titles"
        >
          <a
            v-if="node.books.title1Url"
            :href="node.books.title1Url"
            class="card__featured-titles-link"
            title="Learn More"
          >
            <img class="card__featured-titles-img" :src="node.books.title1Img" />
          </a>
          <a
            v-if="node.books.title2Url"
            :href="node.books.title2Url"
            class="card__featured-titles-link"
            title="Learn More"
          >
            <img class="card__featured-titles-img" :src="node.books.title2Img" />
          </a>
          <a
            v-if="node.books.title3Url"
            :href="node.books.title3Url"
            class="card__featured-titles-link"
            title="Learn More"
          >
            <img class="card__featured-titles-img" :src="node.books.title3Img" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query Sponsors {
  sponsors: allSponsors(sortBy: "name", order: ASC, filter: {type: {contains: ["Exhibitor"]}}) {
    edges {
      node {
        id
        type
        name
        description
        website
        social {
          blog
          twitter
          facebook
          youtube
          instagram
          other
        }
        books {
          title1Url
          title2Url
          title3Url
          title1Img
          title2Img
          title3Img
        }
        logo (width: 700, quality: 80)
      }
    }
  }
}
</static-query>
<script>
import {
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
  GlobeIcon,
  PenToolIcon
} from "vue-feather-icons";
export default {
  components: {
    TwitterIcon,
    FacebookIcon,
    YoutubeIcon,
    InstagramIcon,
    GlobeIcon,
    PenToolIcon
  },
  methods: {
    extractEnd(input) {
      const result = input.match(/[^/]+(?=\/$|$)/);
      return result[0];
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  &__item--exhibitor {
    width: 100%;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 9px;
    .dark & {
      border: 1px solid $textDark;
    }

    .bright & {
      border: 1px solid $textBright;
    }
    & > div > p {
      margin: 0;
    }
  }

  &__img--exhibitor {
    width: 100%;
    height: 15rem;
    margin-bottom: 0.75rem;
    object-fit: contain;
  }
  &__social {
    padding-bottom: 0.5rem;
  }
  &__featured-titles {
    display: flex;
    padding-top: 0.5rem;
  }
  &__featured-titles-link {
    img {
      transition: all 0.2 ease-in-out;
    }
    &:hover img {
      transition: all 0.2 ease-in-out;
      filter: saturate(1.75);
    }
  }
}
</style>
