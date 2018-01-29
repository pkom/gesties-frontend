import * as types from './mutation-types'

export default {
  [types.GET_CENTER_DATA] (state, payload) {
    Object.assign(state, payload)
  },
  [types.LOG_IN] (state, payload) {
    Object.assign(state, payload)
    state.authenticated = true
  },
  [types.LOG_OUT] (state) {
    state.authenticated = false
    state.token = null
    state.user = {
      user: null,
      fullName: null,
      id: null,
      photo: null,
      profile: []
    }
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
