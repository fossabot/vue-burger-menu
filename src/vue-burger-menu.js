import VueBurgerMenu from "./BurgerMenu.vue";

const VueBurgerMenuPlugin = {
  install(Vue) {
    Vue.component("vue-burger-menu", VueBurgerMenu);
  }
};

export default VueBurgerMenuPlugin;
export { VueBurgerMenu };

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(VueBurgerMenuPlugin);
}
