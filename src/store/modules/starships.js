import axios from "axios";

const state = {
  starships: [],
  starshipsPages: null,
  starshipsCount: null
};
const getters = {
  STARSHIPS: (s) => s.starships,
  STARSHIPS_PAGES: (s) => s.starshipsPages,
  STARSHIPS_COUNT: (s) => s.starshipsCount,
};
const mutations = {
  SET_STARSHIPS: (state, payload) => {
    state.starships = payload;
  },
  SET_STARSHIPS_PAGES: (state, payload) => {
    state.starshipsPages = Math.ceil(+payload / 10);
    state.starshipsCount = payload;
  },
};
const actions = {
  GET_STARSHIPS: async (context, id) => {
    let { data } = await axios.get("https://swapi.dev/api/starships/?page=" + id);
    context.commit("SET_STARSHIPS", data.results);
  },
  GET_STARSHIPS_PAGES: async (context) => {
    let { data } = await axios.get("https://swapi.dev/api/starships/");
    context.commit("SET_STARSHIPS_PAGES", data.count);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
