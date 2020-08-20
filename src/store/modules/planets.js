import axios from "axios";

const state = {
  planets: [],
  planetsPages: null,
};
const getters = {
  PLANETS: (s) => s.planets,
  PLANET_BY_ID: (s) => (id) => s.planets[id - 1],
  PLANETS_PAGES: (s) => s.planetsPages,
};
const mutations = {
  SET_PLANETS: (state, payload) => {
    state.planets.push(payload);
  },
  SET_PLANETS_PAGES: (state, payload) => {
    state.planetsPages = Math.ceil(+payload / 10);
  },
};
const actions = {
  GET_PLANETS: async (context) => {
    
    for (let i = 1; i <= state.planetsPages; i++){
      console.log('fgd')
    let { data } = await axios.get("https://swapi.dev/api/planets/?page=" + i);
    
    context.commit("SET_PLANETS", data.results);
  }
  },
  GET_PLANETS_PAGES: async (context) => {
    let { data } = await axios.get("https://swapi.dev/api/planets/");
    context.commit("SET_PLANETS_PAGES", data.count);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
