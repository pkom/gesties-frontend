import api from '../../api/django'
import * as types from '../mutation-types'

// initial state
const state = {
  mainData: {
    centro: {
      nombre: null,
      codigo: null,
      director: null,
      firma: null,
      cursoDefecto: null
    },
    cursoActual: null,
    cursos: []
  },
  authenticated: false,
  showLoader: false,
  token: null,
  error: null
}

// getters
const getters = {
  mainData: state => state.mainData,
  authenticated: state => state.authenticated,
  showLoader: state => state.showLoader,
  token: state => state.token,
  error: state => state.error
}

// actions
const actions = {
  getMainData ({commit}) {
    commit(types.SHOW_LOADING)
    api.getMainData(mainData => {
      commit(types.RECEIVE_MAIN_DATA, mainData)
      commit(types.HIDE_LOADING)
    })
  },
  clearError ({commit}) {
    commit(types.CLEAR_ERROR)
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
  },
  [types.SET_ERROR] (state, payload) {
    state.error = payload
  },
  [types.CLEAR_ERROR] (state) {
    state.error = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
