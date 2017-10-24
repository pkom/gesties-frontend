import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  computed: mapGetters({
    user: 'userData'
  }),
  created () {
    this.$store.dispatch('getUserData')
  }
}
