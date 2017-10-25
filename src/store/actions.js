import * as types from './mutation-types'

export default {
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
