<template>
  <div>
    <transition name="theme" mode="out-in">
      <button
        class="donate-btn--open"
        @click="toggleModal()"
        v-if="!showModal"
        key="open"
      >
        Donate
        <heart-icon class="icon" />
      </button>
      <button
        class="donate-btn--close"
        @click="toggleModal()"
        v-else
        key="close"
      >
        Close
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
  background-color: $accent;
  border-radius: 3px;
  border: none;
  color: $textBright;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: 1.15rem;
  font-weight: 700;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: 1;
  margin-left: 5px;
  padding: 8px 12px;
  position: relative;
  text-transform: uppercase;
  transition: all 0.1s ease-in;
  width: 150px;
  z-index: 1001;

  &:focus,
  &:hover {
    background-color: #666633;
    color: #ffffff;
    outline: none;
  }

  .icon {
    margin-left: 5px;
  }

  &--open {
    @extend .donate-btn;
    // position: fixed;
    // bottom: 3rem;
    // right: 3rem;
  }

  &--close {
    @extend .donate-btn;
  }
}

.donate-modal {
  //   display: none;
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 5rem 1rem 1rem;
  background: rgba(0, 0, 0, 0.85);
  z-index: 1000;
  flex-direction: column;

  &__content {
    border: none;
    height: 100%;
    width: 100%;
    max-height: 90vh;
    max-width: 1000px;
    background: #f7f7ef;
    border-radius: 3px;
    @include box-shadow($small: true);
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
  transform: translateY(10px);
  opacity: 0;
}
</style>
