import axios from "axios"

const state = {
    planets: []
};
const getters = {
    PLANETS: state => {
        return state.planets;
      },
};
const mutations = {
    SET_PLANETS: (state, payload) => {
        state.planets = payload;
      },
    
};
const actions = {
    GET_PLANETS: async (context) => {
        let {data} = await axios.get('https://swapi.dev/api/planets/');
        context.commit('SET_PLANETS', data.results);
      },
};

export default {
  state,
  getters,
  mutations,
  actions,
};