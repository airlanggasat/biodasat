import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Biodata from '../views/Biodata.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/biodata',
      name: 'biodata',
      component: Biodata
    }
  ]
})
