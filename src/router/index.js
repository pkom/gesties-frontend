import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/pages/login/login.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { auth: true, roles: ['RESPONSABLE', 'ADMINISTRATIVO', 'INFORMATICO', 'PROFESOR', 'TUTOR', 'JEFE'] }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some((route) => route.meta.auth)
  // const authed = store.state.user.isAuthorized
  const authed = this.$getters.authed
  if (authRequired && !authed) {
    next('/login')
  } else {
    next()
  }
  // const role = store.state.user.role // get user's role
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

export default router
