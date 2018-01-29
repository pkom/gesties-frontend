import api from '../api/django'
import * as types from './mutation-types'

export default {
  getCenterData ({commit}) {
    commit(types.SHOW_LOADING)
    api.getCenterData(centerData => {
      commit(types.GET_CENTER_DATA, centerData)
      commit(types.HIDE_LOADING)
    })
  },
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
        commit(types.CLEAR_ERROR)
      }
    )
  },
  logoutUser ({ commit }) {
    commit(types.SHOW_LOADING)
    commit(types.LOG_OUT)
    commit(types.HIDE_LOADING)
  },
  clearError ({commit}) {
    commit(types.CLEAR_ERROR)
  }
}
