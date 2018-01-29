import api from '../../api/django'
import * as types from '../mutation-types'

// initial state
const state = {
  userData: {
    usuario: null,
    nombre: null,
    id: null,
    foto: null,
    perfil: []
  }
}

// getters
const getters = {
  userData: state => state.userData
}

// actions
const actions = {
  loginUser ({ commit }, payload) {
    commit(types.SHOW_LOADING)
    api.loginUser(
      payload,
      (response) => {
        commit(types.LOG_IN, response.data)
        commit(types.HIDE_LOADING)
      },
      (response) => {
        commit(types.SET_ERROR, response.error)
        commit(types.HIDE_LOADING)
      }
    )
  },
  logoutUser ({ commit }) {
    commit(types.SHOW_LOADING)
    commit(types.LOG_OUT)
  }
}

// mutations
const mutations = {
  [types.LOG_IN] (state, payload) {
    state.userData = {...payload}
    state.showLoader = false
    state.authenticated = true
    state.token = '12221212'
  },
  [types.LOG_OUT] (state) {
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
