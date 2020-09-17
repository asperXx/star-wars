import axios from "axios"

const state = {
    films: [],
    filmsCount: null
};
const getters = {
    FILMS: state => {
        return state.films;
      },
    FILMS_COUNT: state => {
      return state.filmsCount
    }
};
const mutations = {
    SET_FILMS: (state, payload) => {
        state.films = payload;
      },
      SET_FILMS_PAGES: (state, payload) => {
        state.filmsCount = payload;
      },
    
};
const actions = {
    GET_FILMS: async (context) => {
        let {data} = await axios.get('https://swapi.dev/api/films/');
        context.commit('SET_FILMS', data.results);
      },
      GET_FILMS_PAGES: async (context) => {
        let { data } = await axios.get("https://swapi.dev/api/films/");
        context.commit("SET_FILMS_PAGES", data.count);
      },
};

export default {
  state,
  getters,
  mutations,
  actions,
};