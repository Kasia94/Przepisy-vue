import Vue from 'vue';
import Vuex from 'vuex';
import db from './db.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: db.recipes,
  },
  getters: {
    choiceRecipe(state) {
      return (id) => state.recipes.find((r) => r.id === +id);
    },
  },
});
