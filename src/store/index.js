import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthed: true,
    token: null,
    centro: {
      nombre: 'I.E.S. Maestro Juan Calero',
      codigo: '06006701',
      director: 'Manuel Barbecho Terrón',
      firma: null
    },
    curso: {
      id: 1,
      curso: '2017/2018'
    },
    usuario: {
      usuario: 'fmoras01',
      nombre: 'Francisco Mora Sánchez',
      id: '1233433434R',
      foto: null,
      perfil: ['INFORMATICO']
    }
  },
  getters: {
    isAuthed (state) {
      return state.isAuthed
    },
    token (state) {
      return state.token
    },
    centro (state) {
      return state.centro
    },
    curso (state) {
      return state.curso
    },
    usuario (state) {
      return state.usuario
    }
  }
})
