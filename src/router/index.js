import Vue from 'vue'
import Router from 'vue-router'
import Weather from '@/components/Weather'
import Client from '@/components/Client'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Client
    },
    {
      path: '/serverside',
      name: 'Server',
      component: Weather
    }
  ]
})
