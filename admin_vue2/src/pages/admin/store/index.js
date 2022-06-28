import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showNavs: true,
    // showSidenav: true,
    showNavbar: true,
    toggleArrow: true,
    showSideBar: true,
    loginVisible: true,
    accessToken: '',
    refreshToken: '',
  },
  getters: {
    isLogin(state) {
      return state.accessToken == '' ? false : true
    },
    'accessToken': state => state.accessToken
  },
  mutations: {
    setToken: function (state, accessToken) {
      state.accessToken = accessToken;
    },
    delToken: function (state) {
        state.accessToken = '';
        localStorage.removeItem('accessToken')
        router.push('/admin/login').catch(() => {
        alert('로그인 후 이용가능합니다.')})
    },
    headerVisible(state) {
      router.afterEach((to) => {
        if( to.path === '/admin/login' ) {
          state.loginVisible = false
        } else {
          state.loginVisible = true
        }
      })
    },
    toggleEveryDisplay(state) {
      state.showNavbar = !state.showNavbar
      state.showSidenav = !state.showSidenav
      state.showNavs = !state.showNavs
    },
    flexibleDisplay(state) {
      state.showSideBar = !state.showSideBar
    },
  },
  actions: {
  },
  modules: {
  },

  plugins: [
    createPersistedstate({
      paths: ['state', 'getters', 'mutations', 'actions', 'accessToken'],
    }),
  ],
})
