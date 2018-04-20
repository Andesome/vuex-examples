import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import router from "./router/index"
import store from "./store/index"

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
