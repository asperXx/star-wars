import axios from "axios"

const state = {
    starships: []
};
const getters = {
    STARSHIPS: state => {
        return state.starships;
      },
};
const mutations = {
    SET_STARSHIPS: (state, payload) => {
        state.starships = payload;
      },
    
};
const actions = {
    GET_STARSHIPS: async (context) => {
        let {data} = await axios.get('https://swapi.dev/api/starships/');
        context.commit('SET_STARSHIPS', data.results);
      },
};

export default {
  state,
  getters,
  mutations,
  actions,
};