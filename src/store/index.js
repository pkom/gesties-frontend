import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
// import general from './modules/general'
import users from './modules/users'

Vue.use(Vuex)

const state = {
  mainData: {},
  user: {},
  authenticated: false,
  showLoader: false,
  token: null
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  actions,
  getters,
  mutations,
  modules: {
    // general,
    users
  }
})
