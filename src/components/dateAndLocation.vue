<template>
  <div class="widget-header">
    <div class="widget-header__date">
      <calendar-icon class="icon" />
      <p>{{ date }}</p>
    </div>

    <div class="widget-header__location">
      <map-icon class="icon" />
      <p>{{ location }}</p>
    </div>
  </div>
</template>

<script>
import { MapIcon, CalendarIcon } from "vue-feather-icons";

export default {
  components: {
    MapIcon,
    CalendarIcon
  },
  data() {
    return {
      description: "Telling the Stories of Science",
      date: "8-11 October 2020",
      location: "New Orleans, LA, USA"
    };
  }
};
</script>

<style lang="scss" scoped>
.widget-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
  opacity: 0.5;

  .dark & {
    color: $sidebarBright;
  }

  .bright & {
    color: $sidebarDark;
  }

  &__date,
  &__location {
    display: flex;
    align-items: center;

    p {
      margin-left: 0.5rem;
    }
  }

  &__brand {
    // font-family: "Adobe Garamond Pro", Garamond, "Times New Roman", Times, serif;
    font-size: larger;
    font-weight: 700;
  }
}
</style>
