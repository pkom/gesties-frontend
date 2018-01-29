const _centerData = {
  center: {
    name: 'I.E.S. Maestro Juan Calero',
    code: '06006701',
    headmasterName: 'Manuel Barbecho Terrón',
    headmasterSign: null,
    defaultCourse: 2
  },
  courses: [
    {
      id: 2,
      course: '2017/2018'
    },
    {
      id: 1,
      course: '2016/2017'
    }
  ]
}

const _userData = {
  userName: 'fmoras01',
  fullName: 'Francisco Mora Sánchez',
  id: '1233434R',
  photo: '/static/adminlte/img/user2-160x160.jpg',
  profile: ['INFORMÁTICO']
}

export default {
  getCenterData (cb) {
    setTimeout(() => cb(_centerData), process.env.API_DELAY)
  },
  loginUser (loginData, cb, errorCb) {
    let okAuth = false
    let response = {}
    if (loginData.user === 'test' && loginData.password === 'test') {
      okAuth = true
      response = {data: {user: _userData, token: '121212212', currentCourse: loginData.course}}
    } else {
      response = {error: 'Nombre de usuario y/o contraseña incorrecta'}
    }
    setTimeout(() => {
      okAuth ? cb(response) : errorCb(response)
    }, process.env.API_DELAY)
  }
}
