import axios from "axios"

const state = {
    venicles: []
};
const getters = {
    VENICLES: state => {
        return state.venicles;
      },
};
const mutations = {
    SET_VENICLES: (state, payload) => {
        state.venicles = payload;
      },
    
};
const actions = {
    GET_VENICLES: async (context) => {
        let {data} = await axios.get('https://swapi.dev/api/venicles/');
        context.commit('SET_VENICLES', data.results);
      },
};

export default {
  state,
  getters,
  mutations,
  actions,
};