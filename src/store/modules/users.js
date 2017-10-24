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
  }
}

// mutations
const mutations = {
  [types.RECEIVE_USER_DATA] (state, { userData }) {
    state.userData = userData
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
