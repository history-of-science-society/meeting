<template>
  <div class="card">
    <div
      class="card__item"
      v-for="{ node } in $static.sponsors.edges"
      :key="node.id"
    >
      <div class="card__top">
        <a class="card__link" :href="node.website">
          <g-image class="card__img--exhibitor" :src="node.logo" />
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
            ><twitter-icon class="card__icon" aria-label="twitter" />@{{
              extractEnd(node.social.twitter)
            }}
          </a>
          <a
            v-if="node.social.facebook"
            class="card__social-item--facebook"
            :href="node.social.facebook"
            ><facebook-icon class="card__icon" aria-label="facebook" />{{
              extractEnd(node.social.facebook)
            }}
          </a>
          <a
            v-if="node.social.youtube"
            class="card__social-item--youtube"
            :href="node.social.youtube"
            ><youtube-icon class="card__icon" aria-label="youtube" />{{
              extractEnd(node.social.youtube)
            }}
          </a>
          <a
            v-if="node.social.instagram"
            class="card__social-item--instagram"
            :href="node.social.instagram"
            ><instagram-icon class="card__icon" aria-label="instagram" />{{
              extractEnd(node.social.instagram)
            }}
          </a>
          <a
            v-if="node.social.blog"
            class="card__social-item--blog"
            :href="node.social.blog"
            ><pen-tool-icon class="card__icon" aria-label="blog" />{{
              extractEnd(node.social.blog)
            }}
          </a>
        </div>
        <div class="card__social-item--featured-titles"></div>
      </div>
    </div>
  </div>
</template>

<static-query>
query Sponsors {
  sponsors: allSponsors(order: ASC) {
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
          title1
          title2
          title3
        }
        logo
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
.card__img--exhibitor {
  width: 100%;
  height: 15rem;
  margin-bottom: 0.75rem;
  object-fit: contain;
}
</style>
