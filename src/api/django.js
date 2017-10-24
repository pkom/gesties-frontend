/**
 * Mocking client-server processing
 */

const _generalData = {
  centro: {
    'nombre': 'I.E.S. Maestro Juan Calero',
    'codigo': '06006701',
    'director': 'Manuel Barbecho Terrón',
    'firma': null
  },
  curso: {
    'id': 1,
    'curso': '2017/2018'
  }
}

const _usuarioData = {
  'authed': true,
  'token': '12212122232323',
  'usuario': 'fmoras01',
  'nombre': 'Francisco Mora Sánchez',
  'id': '1233434R',
  'foto': null,
  'perfil': ['INFORMATICO']
}

export default {
  getGeneralData (cb) {
    setTimeout(() => cb(_generalData), 100)
  },
  getUserData (cb) {
    setTimeout(() => cb(_usuarioData), 100)
  }
}
