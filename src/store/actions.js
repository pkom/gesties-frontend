import api from '../api/django'
import * as types from './mutation-types'

export default {
  getMainData ({commit}) {
    commit(types.SHOW_LOADING)
    api.getGeneralData(generalData => {
      commit(types.RECEIVE_GENERAL_DATA, generalData)
    })
    console.log('He cargado los mainData.....')
    commit(types.HIDE_LOADING)
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
