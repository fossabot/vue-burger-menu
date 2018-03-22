<template>
  <div>
    <vue-burger-menu />
  </div>
</template>

<script>
import VueBurgerMenu from "../src/BurgerMenu.vue";

export default {
  components: {
    VueBurgerMenu
  }
};
</script>

<style rel="stylesheet">
  body {
    max-width: 800px;
    padding: 20px;
    margin-left: auto !important;
    margin-right: auto !important;
    font-family: monospace;
    background-color: #f2f2f2;
  }
</style>
