import { mapState } from 'vuex'

export default {
  name: 'Header',
  computed: mapState([
    'isAuthed',
    'token',
    'centro',
    'curso',
    'usuario'
  ])
}
