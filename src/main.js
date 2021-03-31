import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

require('@/assets/main.scss');

// Connexion à l'api 
window.api = axios.create({ 
    baseURL: "http://docketu.iutnc.univ-lorraine.fr:14002/",
    // withCredentials: true 
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
