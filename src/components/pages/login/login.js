export default {
  name: 'Login',
  data () {
    return {
      user: { name: null, password: null },
      cursoSeleccionado: 2,
      cursos: [
        {
          id: 2,
          curso: '2017/2018'
        },
        {
          id: 1,
          curso: '2016/2017'
        }
      ],
      errors: []
    }
  },
  computed: {
    isFormEmpty () {
      return !(this.user.name && this.user.password)
    }
  },
  methods: {
    onLogin () {
    }
  }
}
