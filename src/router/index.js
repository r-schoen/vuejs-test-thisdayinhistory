import Vue from 'vue'
import VueRouter from 'vue-router'
import ItemList from '../components/ItemList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ItemList
  }
]

const router = new VueRouter({
  routes
})

export default router
