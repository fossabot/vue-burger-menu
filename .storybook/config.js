import { configure } from '@storybook/vue';

import Vue from 'vue';
import VueBurgerMenu from "../src/BurgerMenu.vue";

function loadSettings() {
  // You can require as many data as you need.
  // require('../src/data');
}

configure(loadSettings, module);
