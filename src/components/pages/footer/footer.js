import { mapGetters } from 'vuex'

export default {
  name: 'Footer',
  computed: {
    isLoaded () {
      if (this.hasOwnProperty('mainData')
          && this.mainData != null) {
          return true;
      }
      return false;
    },
    ...mapGetters([
    'mainData'
    ])
  }
}

