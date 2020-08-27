import axios from "axios"

const state = {
    films: []
};
const getters = {
    FILMS: state => {
        return state.films;
      },
};
const mutations = {
    SET_FILMS: (state, payload) => {
        state.films = payload;
      },
    
};
const actions = {
    GET_FILMS: async (context) => {
        let {data} = await axios.get('https://swapi.dev/api/films/');
        context.commit('SET_FILMS', data.results);
      },
};

export default {
  state,
  getters,
  mutations,
  actions,
};