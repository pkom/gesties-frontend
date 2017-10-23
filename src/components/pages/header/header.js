import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    isAuthed() {
      return this.$store.getters.isAuthed
    },
    token() {
      return this.$store.getters.token
    },
    centro() {
      return this.$store.getters.centro
    },
    curso() {
      return this.$store.getters.curso
    },
    usuario() {
      return this.$store.getters.usuario
    }
  }
}
