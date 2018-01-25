import { mapGetters } from 'vuex'

export default {
  name: 'Footer',
  computed: mapGetters([
    'mainData',
    'showLoader'
  ])
}
