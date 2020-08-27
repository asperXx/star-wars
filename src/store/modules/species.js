import axios from "axios";

const state = {
  species: [],
  speciesPages: null,
};
const getters = {
  SPECIES: (s) => s.species,
  SPECIES_PAGES: (s) => s.speciesPages,
};
const mutations = {
  SET_SPECIES: (state, payload) => {
    state.species = payload;
  },
  SET_SPECIES_PAGES: (state, payload) => {
    state.speciesPages = Math.ceil(+payload / 10);
  },
};
const actions = {
  GET_SPECIES: async (context, id) => {
    let { data } = await axios.get("https://swapi.dev/api/species/?page=" + id);
    context.commit("SET_SPECIES", data.results);
  },
  GET_SPECIES_PAGES: async (context) => {
    let { data } = await axios.get("https://swapi.dev/api/species/");
    context.commit("SET_SPECIES_PAGES", data.count);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
