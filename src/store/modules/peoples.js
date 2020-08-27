import axios from "axios";

const state = {
  peoples: [],
  peoplesPages: null,
};
const getters = {
  PEOPLES: (s) => s.peoples,
  PEOPLES_PAGES: (s) => s.peoplesPages,
};
const mutations = {
  SET_PEOPLES: (state, payload) => {
    state.peoples = payload;
  },
  SET_PEOPLES_PAGES: (state, payload) => {
    state.peoplesPages = Math.ceil(+payload / 10);
  },
};
const actions = {
  GET_PEOPLES: async (context, id) => {
    let { data } = await axios.get("https://swapi.dev/api/people/?page=" + id);
    context.commit("SET_PEOPLES", data.results);
  },
  GET_PEOPLES_PAGES: async (context) => {
    let { data } = await axios.get("https://swapi.dev/api/people/");
    context.commit("SET_PEOPLES_PAGES", data.count);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
