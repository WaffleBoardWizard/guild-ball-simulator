import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material';
import VueSocketio from 'vue-socket.io';

require('vue-material/dist/vue-material.css')

Vue.use(VueSocketio, "http://localhost:8090");
Vue.use(VueMaterial)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
