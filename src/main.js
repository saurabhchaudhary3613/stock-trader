import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import VueResource from 'vue-resource'
import App from './App.vue'

import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://http-vuejs-127f4.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})
// https://http-vuejs-127f4.firebaseio.com/
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
