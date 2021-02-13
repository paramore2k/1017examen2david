import Vue from 'vue'
import App from './App.vue'
/* Vue-Router */
import VueRouter from 'vue-router'
import router from "@/router";
/* Bootstrap */
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
