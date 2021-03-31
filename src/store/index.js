import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage : window.localStorage
})



export default new Vuex.Store({
  state: {

    admin:false,
    token:false,
    events:false,

  },
  mutations: {

    setAdmin(state, admin){
      state.admin = admin;
    },

    setToken(state, token){
      state.token = token;
    },

    setEvents(state, events){
      state.events = events;
    }

  },
  actions: {
  },
  modules: {
  },

  plugins: [vuexLocal.plugin]
})
