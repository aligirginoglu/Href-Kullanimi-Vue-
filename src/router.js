import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Generic from './views/Generic.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About, 
    },
    {
      path: '/generic',
      name: 'generic',
      component: Generic,
    }
  ]
})