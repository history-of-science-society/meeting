<template>
  <div>
    <GmapMap
      :center="{ lat: 29.9517, lng: -90.06757 }"
      :zoom="11"
      map-type-id="roadmap"
      style="width: 100%; height: 400px"
      fullscreenControl="true"
      :options="{
        mapTypeControl: false,
        streetViewControl: false,
        clickableIcons: true,

        styles: [
          {
            featureType: 'poi',
            stylers: [{ visibility: 'off' }]
          }
        ]
      }"
    >
      <gmap-custom-marker :marker="hotel">
        <div class="marker__container">
          <div class="marker__text-container">
            <a
              class="marker__title"
              href="https://www.marriott.com/hotels/travel/msyis-sheraton-new-orleans-hotel/"
              >Sheraton New Orleans</a
            >
            <p class="marker__subtitle">Meeting Hotel</p>
          </div>
          <svg
            enable-background="new 0 0 128 128"
            height="128px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 128 128"
            width="128px"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="marker__icon"
          >
            <g>
              <g>
                <path
                  d="M20,48h8v-8h-8V48z M52,40h8v-8h-8V40z M68,40h8v-8h-8V40z M84,40h8v-8h-8V40z M52,24h8v-8h-8V24z M68,24    h8v-8h-8V24z M84,24h8v-8h-8V24z M52,72h8v-8h-8V72z M68,72h8v-8h-8V72z M84,72h8v-8h-8V72z M52,88h8v-8h-8V88z M84,88h8v-8h-8V88    z M52,104h8v-8h-8V104z M84,104h8v-8h-8V104z M108,96h8v-8h-8V96z M108,72v8h8v-8H108z M108,112h8v-8h-8V112z M52,56h8v-8h-8V56z     M68,56h8v-8h-8V56z M84,56h8v-8h-8V56z M20,64h8v-8h-8V64z M20,80h8v-8h-8V80z M20,96h8v-8h-8V96z M20,112h8v-8h-8V112z M68,88h8    v-8h-8V88z"
                />
              </g>
            </g>
            <path
              clip-rule="evenodd"
              d="M124,120c0,4.422-3.578,8-8,8H12c-4.422,0-8-3.578-8-8V32  c0-4.422,3.578-8,8-8h24V8c0-4.422,3.578-8,8-8h56c4.422,0,8,3.578,8,8v48h8c4.422,0,8,3.578,8,8V120z M36,32H12v88h24V32z M100,8  H44v112h24V96h8v24h24V8z M116,64h-8v56h8V64z"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </gmap-custom-marker>
      <gmap-custom-marker :marker="airport">
        <div class="marker__container">
          <div class="marker__text-container">
            <a href="#" class="marker__title">New Orleans Airport</a>
            <p class="marker__subtitle">Airport Code: MSY</p>
          </div>
          <svg
            enable-background="new 0 0 128 128"
            height="128px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 128 128"
            width="128px"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="marker__icon"
            aria-hidden="true"
          >
            <path
              clip-rule="evenodd"
              d="M125.07,78.188C123.629,79.367,121.832,80,120,80  c-0.523,0-1.047-0.055-1.57-0.156L80,72.156V92.75c0,1.844,1.27,3.328,2.961,3.789l-0.012,0.047l-0.098,0.086  c0.234,0.094,0.496,0.055,0.727,0.172l16,8c2.711,1.359,4.422,4.125,4.422,7.156v8c0,4.422-3.582,8-8,8l-32-8l-32,8  c-4.418,0-8-3.578-8-8v-8c0-3.031,1.711-5.797,4.422-7.156l16-8c0.23-0.117,0.492-0.078,0.727-0.172l-0.098-0.086l-0.012-0.047  C46.73,96.078,48,94.594,48,92.75V72.156L9.57,79.844C9.047,79.945,8.523,80,8,80c-1.832,0-3.629-0.633-5.07-1.813  C1.074,76.664,0,74.398,0,72v-8c0-2.813,1.473-5.414,3.883-6.859l41.156-24.602C46.73,32.078,48,30.594,48,28.75V16  c0-8.836,7.164-16,16-16s16,7.164,16,16v12.75c0,1.844,1.27,3.328,2.961,3.789l41.156,24.602C126.527,58.586,128,61.188,128,64v8  C128,74.398,126.926,76.664,125.07,78.188z M120,64c0,0-44.891-25.578-45.656-26.344S73.008,36,72.617,35.055S72,33.086,72,32V16  c0-4.414-3.59-8-8-8s-8,3.586-8,8v16c0,1.086-0.227,2.109-0.617,3.055s-0.961,1.836-1.727,2.602S8,64,8,64v8l39.992-8L48,64.008V64  c1.086,0,2.113,0.227,3.055,0.617c0.945,0.391,1.836,0.961,2.602,1.727s1.336,1.656,1.727,2.602S56,70.914,56,72v24  c0,1.086-0.227,2.109-0.617,3.055s-0.961,1.836-1.727,2.602S32,112,32,112v8l32-8l32,8v-8c0,0-20.891-9.578-21.656-10.344  s-1.336-1.656-1.727-2.602S72,97.086,72,96V71.992c0.004-1.086,0.227-2.102,0.617-3.047s0.961-1.836,1.727-2.602  s1.656-1.336,2.602-1.727C77.883,64.227,78.906,64,79.992,64H80l40,8V64z"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </gmap-custom-marker>
    </GmapMap>
  </div>
</template>

<script>
import GmapCustomMarker from "vue2-gmap-custom-marker";
import { MapPinIcon, HomeIcon, FeatherIcon } from "vue-feather-icons";
export default {
  data() {
    return {
      hotel: {
        lat: 29.9517,
        lng: -90.06757
      },
      airport: {
        lat: 29.991016,
        lng: -90.25909
      }
    };
  },
  components: {
    GmapCustomMarker,
    MapPinIcon,
    HomeIcon,
    FeatherIcon
  }
};
</script>

<style lang="scss" scoped>
.marker {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__text-container {
    background: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 0.5rem 1em;
    border-radius: 8px;
    font-size: 14px;
    margin-bottom: 0.25rem;
    text-align: center;
  }

  &__title {
    .bright &,
    .dark & {
      font-weight: 700;
      margin: 0;
      color: white;
    }
  }

  &__subtitle {
    margin: 0;
    margin-top: 0.25rem;
    opacity: 0.85;
  }

  &__icon {
    height: 40px;
    width: 40px;
    fill: #000;
  }
}
</style>
