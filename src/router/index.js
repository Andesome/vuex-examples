import VueRouter from "vue-router";
import Counter from "../pages/Counter.vue"
import Shop from "../pages/Shop.vue"
import Todo from "../pages/Todo.vue"

const routes = [{
  path: '/counter',
  component: Counter
},{
  path:'/shop',
  component:Shop
},{
  path:'/todo',
  component:Todo
}];

export default new VueRouter({
  routes
})