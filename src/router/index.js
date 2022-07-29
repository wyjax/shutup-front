import Vue from 'vue'
import Router from 'vue-router'
import mainView from '../views/MainView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: mainView
    }
  ]
})
