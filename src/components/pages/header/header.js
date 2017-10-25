import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: mapGetters({
    user: 'userData',
    authenticated: 'authenticated'
  }),
  created () {
    this.$store.dispatch('getUserData')
  }
}
