import axios from "axios"

const state = {
    species: []
};
const getters = {
    SPECIES: state => {
        return state.species;
      },
};
const mutations = {
    SET_SPECIES: (state, payload) => {
        state.species = payload;
      },
    
};
const actions = {
    GET_SPECIES: async (context) => {
        let {data} = await axios.get('https://swapi.dev/api/species/');
        context.commit('SET_SPECIES', data.results);
      },
};

export default {
  state,
  getters,
  mutations,
  actions,
};