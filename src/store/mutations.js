import * as types from './mutation-types'

export default {
  [types.SHOW_LOADING] (state) {
    state.showLoader = true
  },
  [types.HIDE_LOADING] (state) {
    state.showLoader = false
  },
  [types.RECEIVE_GENERAL_DATA] (state, payload) {
    state.mainData = payload
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
    state.authenticated = false
    state.token = null
  }
}
