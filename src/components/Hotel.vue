<template>
  <div class="hotel__container">
    <a
      href="https://www.marriott.com/hotels/travel/msyis-sheraton-new-orleans-hotel/"
      >Sheraton New Orleans Hotel</a
    >
    <a href="https://goo.gl/maps/GT2gHWdUFttTkwk97"
      ><map-pin-icon class="hotel__svg" />500 Canal Street, New Orleans,
      Louisana 70130 USA</a
    >
    <a class="hotel__tel" href="tel:+1-504-525-2500"
      ><phone-icon class="hotel__svg" />+1 (504) 525-2500</a
    >
  </div>
</template>

<script>
import { MapPinIcon, PhoneIcon } from "vue-feather-icons";

export default {
  components: { MapPinIcon, PhoneIcon }
};
</script>

<style lang="scss" scoped>
.hotel {
  &__container {
    display: flex;
    flex-direction: column;
  }
  &__tel {
    text-decoration: none;
    border: none;
    display: flex;
    align-items: center;
  }
  &__svg {
    height: 0.85rem;
    width: 0.85rem;
    margin-right: 0.25rem;
  }
}
</style>
