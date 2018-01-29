import Vue from 'vue'
import VueRouter from 'vue-router'
import VuexRouterSync from 'vuex-router-sync'

import './assets/sass/app.scss'
import store from './store'
import routes from './routes'

import VueToastr from '@deveodk/vue-toastr'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
// If you would like custom styling of the toastr the css file can be replaced
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'

Vue.use(VueToastr)

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  next()
  // const authRequired = to.matched.some((route) => route.meta.auth)
  // if (authRequired) { // && !authed) {
  //  next('/login')
  // } else {
  //  next()
  // }
  // const role = store.state.user.profile // get user's role
  // const role = 'INFORMATICO' // get user's role
  // get allowed roles from mathed routes. We use reduce() to only get the roles nested the deepest
  // const allowedRoles = to.matched.reduce((acc, route) => {
  //   return route.meta.roles && !acc.length
  //     ? route.meta.roles
  //     : acc
  // }, [])
  // console.log('allowedRoles......' + allowedRoles)
  // this would probably be a more sophisticated check, to see weither a user who has role
  // 'PARTICIPANT' is allowed to see the specific project that this route is attachted to
  // if (allowedRoles.include(role)) {
  //   next()
  // } else {
  //   const redirectRouteByRole = {
  //     RESPONSABLE: {name: 'home'}
  //     // PROFESOR: {name: 'home', projectId: state.user.data.projectId},
  //   }
  //   next(redirectRouteByRole[role])
  // }
})

VuexRouterSync.sync(store, router)

Vue.router = router

export default {
  router
}
