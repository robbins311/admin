import Vue from 'vue'
import Vuex from 'vuex'
import createPresistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    
  },
  getters: {
  },
  mutations: {
    toggleEveryDisplay(state) {
      state.showNavbar = !state.showNavbar
      state.showSidenav = !state.showSidenav
      state.showNavs = !state.showNavs
    }
  },
  actions: {
  },
  modules: {
  },

  plugins: [
    createPresistedState({
      paths: ['state', 'getters', 'mutations', 'actions'],
    }),
  ],
})
