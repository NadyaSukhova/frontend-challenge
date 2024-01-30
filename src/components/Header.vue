<template>
  <div id="header">
    <RouterLink :class="{ 'active' : numb === 1 }" :to="{ name: 'all' }">Все котики</RouterLink>
    <RouterLink :class="{ 'active' : numb === 2 }" :to="{ name: 'favorite' }">Любимые котики</RouterLink>
  </div>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";

export default {
  name: "Header",
  props: {
    numb: Number,
  },
};
</script>

<style lang="scss">
@import "../assets/css/scss/main.scss";

#header {
  background-color: $header-color;
  width: 100%;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 0 0 4.31vw;

  a {
    padding: 2.13vh 0 2.13vh 0;
    display: inline-block;
    text-align: center;
    color: $header-color-white;
    height: 100%;
  }
  .active {
    background-color: $header-color-active;
    color: $header-color-white-active;
  }
  a:hover {
    color: $header-color-white-active;
    background-color: $header-color;
  }
  a:nth-child(1) {
    width: 120px;
  }
  a:nth-child(2) {
    width: 173px;
  }
}
</style>
