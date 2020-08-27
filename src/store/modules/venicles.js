import axios from "axios";

const state = {
  vehicles: [],
  vehiclesPages: null,
};
const getters = {
  VEHICLES: (s) => s.vehicles,
  VEHICLES_PAGES: (s) => s.vehiclesPages,
};
const mutations = {
  SET_VEHICLES: (state, payload) => {
    state.vehicles = payload;
  },
  SET_VEHICLES_PAGES: (state, payload) => {
    state.vehiclesPages = Math.ceil(+payload / 10);
  },
};
const actions = {
  GET_VEHICLES: async (context, id) => {
    let { data } = await axios.get("https://swapi.dev/api/vehicles/?page=" + id);
    context.commit("SET_VEHICLES", data.results);
  },
  GET_VEHICLES_PAGES: async (context) => {
    let { data } = await axios.get("https://swapi.dev/api/vehicles/");
    context.commit("SET_VEHICLES_PAGES", data.count);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
