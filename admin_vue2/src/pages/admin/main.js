import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Bootstrap
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// axios
import axios from 'axios'
// sass
/* import './assets/scss/custom.scss' */
// Alert
import VueSimpleAlert from 'vue-simple-alert'
// Editor
import Vue2Editor from 'vue2-editor'

// BootStrap
Vue.use(BootstrapVue); 
Vue.use(BootstrapVueIcons);
// Alert
Vue.use(VueSimpleAlert);
// Editor
Vue.use(Vue2Editor)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
