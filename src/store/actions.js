import * as types from './mutation-types'

export const loginUser = ({ commit }, user) => {
  commit(types.LOGIN_REQUEST, user)
}
