/**
 * Mocking client-server processing
 */

const _mainData = {
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
  foto: '/static/adminlte/img/user2-160x160.jpg',
  perfil: ['INFORMATICO']
}

export default {
  getMainData (cb) {
    setTimeout(() => cb(_mainData), 100)
  },
  loginUser (loginData, cb, errorCb) {
    let okAuth = false
    let response = {}
    if (loginData.user === 'test' && loginData.password === 'test') {
      okAuth = true
      response = {data: _usuarioData, curso: loginData.curso}
    } else {
      response = {error: 'Nombre de usuario y/o contraseña incorrecta'}
    }
    setTimeout(() => {
      okAuth ? cb(response) : errorCb(response)
    }, 100)
  }
}
