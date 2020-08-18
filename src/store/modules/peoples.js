import axios from "axios"

const state = {
    peoples: []
};
const getters = {
    PEOPLES: state => {
        return state.peoples;
      },
};
const mutations = {
    SET_PEOPLES: (state, payload) => {
        state.peoples = payload;
      },
    
};
const actions = {
    GET_PEOPLES: async (context) => {
        let {data} = await axios.get('https://swapi.dev/api/people/');
        context.commit('SET_PEOPLES', data.results);
      },
};

export default {
  state,
  getters,
  mutations,
  actions,
};