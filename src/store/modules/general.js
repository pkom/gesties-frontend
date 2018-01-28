import api from '../../api/django'
import * as types from '../mutation-types'

// initial state
const state = {
  mainData: {},
  authenticated: false,
  showLoader: false,
  token: null
}

// getters
const getters = {
  mainData: state => state.mainData,
  authenticated: state => state.authenticated,
  showLoader: state => state.showLoader,
  token: state => state.token
}

// actions
const actions = {
  getMainData ({commit}) {
    commit(types.SHOW_LOADING)
    api.getMainData(mainData => {
      commit(types.RECEIVE_MAIN_DATA, mainData)
      commit(types.HIDE_LOADING)
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_MAIN_DATA] (state, payload) {
    state.mainData = payload
  },
  [types.SHOW_LOADING] (state) {
    state.showLoader = true
  },
  [types.HIDE_LOADING] (state) {
    state.showLoader = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
