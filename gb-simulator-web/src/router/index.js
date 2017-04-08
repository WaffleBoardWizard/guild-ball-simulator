import Vue from 'vue'
import Router from 'vue-router'
import * as Pages from '../components/Pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Game',
      component: Pages.Game
    }
  ]
})
