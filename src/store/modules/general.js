import api from '../../api/django'
import * as types from '../mutation-types'

// initial state
const state = {
  generalData: {}
}

// getters
const getters = {
  generalData: state => state.generalData
}

// actions
const actions = {
  getGeneralData ({ commit }) {
    api.getGeneralData(generalData => {
      commit(types.RECEIVE_GENERAL_DATA, { generalData })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_GENERAL_DATA] (state, { generalData }) {
    state.generalData = generalData
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
