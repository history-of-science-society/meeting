<template>
  <div>
    <transition name="theme" mode="out-in">
      <button
        class="donate-btn--open"
        @click="toggleModal()"
        v-if="!showModal"
        key="open"
      >
        <span class="hide-sm">Donate</span>
        <heart-icon class="icon" />
      </button>
      <button
        class="donate-btn--close"
        @click="toggleModal()"
        v-else
        key="close"
      >
        <span class="hide-sm">Close</span>
        <x-icon class="icon" />
      </button>
    </transition>
    <transition name="modal">
      <div
        class="donate-modal"
        v-if="showModal"
        @click.stop="toggleModal()"
        tabindex="0"
      >
        <iframe
          class="donate-modal__content"
          src="https://interland3.donorperfect.net/weblink/weblink.aspx?name=E343847&id=2"
        ></iframe>
      </div>
    </transition>
  </div>
</template>

<script>
import { HeartIcon, XIcon } from "vue-feather-icons";

export default {
  components: {
    HeartIcon,
    XIcon
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }
  },
  mounted() {
    const closeByEsc = e => {
      if (e.key === "Escape" && this.showModal === true) {
        this.showModal = false;
      }
    };

    document.body.addEventListener("keyup", closeByEsc, false);
  }
};
</script>

<style lang="scss" scoped>
.donate-btn {
  align-items: center;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: 1.15rem;
  font-weight: 700;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: 1;
  padding: 0;
  position: relative;
  text-transform: uppercase;
  transition: all 0.1s ease-in;
  height: 48px;
  min-width: 48px;

  z-index: 1001;

  .dark & {
    background: $backgroundDark;
    color: $textDark;
  }

  .bright & {
    background: $backgroundBright;
    color: $textBright;
  }

  @include respond-above(sm) {
    width: 150px;
    padding: 5px;
    svg {
      margin-left: 5px;
    }
  }

  svg {
    fill: rgba(0, 0, 0, 0);
    transition: all 0.1s ease-in-out;
  }

  &:focus,
  &:hover {
    outline: none;
    svg {
      fill: red;
    }
  }

  &--open {
    @extend .donate-btn;
  }

  &--close {
    @extend .donate-btn;
  }
}

.donate-modal {
  //   display: none;
  align-items: center;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 5rem 1rem 1rem;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;

  &__content {
    @include box-shadow($small: true);
    background: #f7f7ef;
    border-radius: 3px;
    border: none;
    height: 100%;
    max-height: 90vh;
    max-width: 1000px;
    width: 100%;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.theme-enter-active,
.theme-leave-active {
  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
}
.theme-enter, .theme-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}

.hide-sm {
  display: none;

  @include respond-above(sm) {
    display: initial;
  }
}
</style>
