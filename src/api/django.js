/**
 * Mocking client-server processing
 */

const _generalData = {
  centro: {
    nombre: 'I.E.S. Maestro Juan Calero',
    codigo: '06006701',
    director: 'Manuel Barbecho Terrón',
    firma: null,
    cursoDefecto: 2
  },
  cursos: [
    {
      id: 2,
      curso: '2017/2018'
    },
    {
      id: 1,
      curso: '2016/2017'
    }
  ]
}

const _usuarioData = {
  usuario: 'fmoras01',
  nombre: 'Francisco Mora Sánchez',
  id: '1233434R',
  foto: null,
  perfil: ['INFORMATICO']
}

export default {
  getGeneralData (cb) {
    setTimeout(() => cb(_generalData), 1000)
  },
  getUserData (cb) {
    setTimeout(() => cb(_usuarioData), 1000)
  }
}
