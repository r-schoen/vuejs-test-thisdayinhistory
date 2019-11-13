import Vue from 'vue'
import VueRouter from 'vue-router'
import DayInHistory from '../components/DayInHistory.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: DayInHistory
  }
]

const router = new VueRouter({
  routes
})

export default router
