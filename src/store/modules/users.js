import api from '../../api/django'
import * as types from '../mutation-types'

// initial state
const state = {
  userData: {}
}

// getters
const getters = {
  userData: state => state.userData
}

// actions
const actions = {
  getUserData ({ commit }) {
    api.getUserData(userData => {
      commit(types.RECEIVE_USER_DATA, { userData })
    })
  },
  loginUser ({ commit }) {
    commit(types.LOGIN_REQUEST)
    // axios
    // axios.get(`${API_BASE}/products`).then(response => {
    //   commit(ALL_PRODUCTS_SUCCESS, response.data)
    // })
    commit(types.LOGIN_SUCCESS)
  },
  logoutUser ({ commit }) {
    commit(types.LOGOUT_REQUEST)
    commit(types.LOGIN_SUCCESS)
  }
}

// mutations
const mutations = {
  [types.RECEIVE_USER_DATA] (state, { userData }) {
    state.userData = userData
  },
  [types.LOGIN_REQUEST] (state) {
    state.showLoader = true
  },
  [types.LOGIN_SUCCESS] (state) {
    state.showLoader = false
    state.authenticated = true
    state.token = '12221212'
  },
  [types.LOGOUT_REQUEST] (state) {
    state.showLoader = true
  },
  [types.LOGOUT_SUCCESS] (state) {
    state.showLoader = false
    state.authenticated = false
    state.token = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
