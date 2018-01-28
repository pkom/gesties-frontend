/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
  {
    path: '/',
    name: 'home',
    component: resolve => require(['./../components/home.vue'], resolve),
    meta: { auth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['./../components/pages/login/login.vue'], resolve)
  },
  {
    path: '/*',
    redirect: '/home'
  }
]
