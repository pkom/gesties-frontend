<template>
  <div id="app">
    <header-gesties></header-gesties>
    <sidebar-gesties></sidebar-gesties>
    <div class="wrapper">
      <div class="content-wrapper">
        <breadcrumb-gesties></breadcrumb-gesties>
        <section class="content container-fluid">
          <router-view></router-view>
          <div class="overlay" v-show="showLoader">
            <div class="loading-spinner">
              <div class="dot dotOne"></div>
              <div class="dot dotTwo"></div>
              <div class="dot dotThree"></div>
            </div>
          </div>
        </section>
        <control-sidebar></control-sidebar>
      </div>
      <footer-gesties></footer-gesties>
    </div>
  </div>      
</template>

<script>
  import store from './store'
  import { router } from './bootstrap'
  import * as types from './store/mutation-types'
  import { mapGetters } from 'vuex'

  import Header from '@/components/pages/header/header.vue'
  import Sidebar from '@/components/pages/sidebar/sidebar.vue'
  import ControlSidebar from '@/components/pages/controlSidebar/controlSidebar.vue'
  import Footer from '@/components/pages/footer/footer.vue'
  import Breadcrumb from '@/components/pages/breadcrumb/breadcrumb.vue'

  export default {
    name: 'GestIesApp',
    store,
    router,
    components: {
      'header-gesties': Header,
      'sidebar-gesties': Sidebar,
      'control-sidebar': ControlSidebar,
      'footer-gesties': Footer,
      'breadcrumb-gesties': Breadcrumb
    },
    computed: mapGetters([
      'center',
      // 'userData',
      'authenticated',
      'token',
      'showLoader'
    ]),
    created () {
      this.$store.dispatch('getCenterData')
      this.$store.subscribe((mutation) => {
        if (mutation.payload) {
          switch (mutation.type) {
            case types.SET_ERROR:
              this.$toastr('error', mutation.payload)
              break
          }
        }
      })
    }
  }
</script>