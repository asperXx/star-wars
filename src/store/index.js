import Vue from "vue";
import Vuex from "vuex";
import planets from "./modules/planets";
import peoples from "./modules/peoples";
import venicles from "./modules/venicles";
import species from "./modules/species";
import starships from "./modules/starships";
// import axios from 'axios'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    planets,
    peoples,
    venicles,
    species,
    starships
  }
});
