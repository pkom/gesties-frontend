import { mapGetters } from 'vuex'

export default {
  name: 'Footer',
  computed: mapGetters({
    datos: 'generalData'
  })
}
