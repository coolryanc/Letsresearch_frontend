import Vue from 'vue'
import Router from 'vue-router'
import vueSmoothScroll from 'vue-smooth-scroll'
import VueResource from 'vue-resource'

Vue.use(vueSmoothScroll)
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
    },
  ]
})
