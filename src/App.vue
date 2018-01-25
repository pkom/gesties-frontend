<template>
  <div id="app">
    <div class="overlay" v-if="showLoader">
      <div class="loading-spinner">
        <div class="dot dotOne"></div>
        <div class="dot dotTwo"></div>
        <div class="dot dotThree"></div>
      </div>
    </div>  
    <div v-else>
      <header-gesties></header-gesties>
      <sidebar-gesties></sidebar-gesties>
      <div class="wrapper">
        <div class="content-wrapper">
          <breadcrumb-gesties></breadcrumb-gesties>
          <section class="content container-fluid">
            <router-view/>
          </section>
          <control-sidebar></control-sidebar>
        </div>
        <footer-gesties></footer-gesties>
      </div>
    </div>      
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Header from '@/components/pages/header/header.vue'
  import Sidebar from '@/components/pages/sidebar/sidebar.vue'
  import ControlSidebar from '@/components/pages/controlSidebar/controlSidebar.vue'
  import Footer from '@/components/pages/footer/footer.vue'
  import Breadcrumb from '@/components/pages/breadcrumb/breadcrumb.vue'

  export default {
    name: 'app',
    components: {
      'header-gesties': Header,
      'sidebar-gesties': Sidebar,
      'control-sidebar': ControlSidebar,
      'footer-gesties': Footer,
      'breadcrumb-gesties': Breadcrumb
    },
    computed: mapGetters([
      'mainData',
      'user',
      'authenticated',
      'token',
      'showLoader'
    ]),
    created () {
      this.$store.dispatch('getMainData')
    }
  }
</script>

<style>
  .overlay {
    background: rgba(255, 255, 255, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .loading-spinner {
    position : absolute;
    top      : 50%;
    left     : 50%;
    -webkit-transform : translateX(-50%) translateY(-50%);
    -moz-transform : translateX(-50%) translateY(-50%);
    transform : translateX(-50%) translateY(-50%);
  }

  .dot {
    background    : black;
    border-radius : 100%;
    color         : white;
    height        : 8px;
    line-height   : 8px;
    text-align    : center;
    width         : 8px;
  }

  .dotOne {
    -webkit-animation : dotOneKeyframes 5s ease  infinite;
    background        : #F9E610;
    position          : absolute;
    top               : 0;
    left              : 0;
  }

  .dotTwo {
    -webkit-animation : dotTwoKeyframes 5s ease 0.4166666666666s infinite;
    background        : #EFDB06;
    position          : absolute;
    top               : 0;
    left              : 14px;
  }

  .dotThree {
    -webkit-animation : dotThreeKeyframes 5s ease 0.83333333333s infinite;
    background        : #DBC906;
    position          : absolute;
    top               : 14px;
    left              : 14px;
  }

  @-webkit-keyframes dotOneKeyframes {
    0% {
      top  : 0;
      left : 0;
    }
    8.3333333333% {
      top  : 14px;
      left : 0;
    }
    16.6666666666% {

    }
    25% {
      top  : 14px;
      left : 0;
    }
    33.3333333333% {
      top  : 14px;
      left : 14px;
    }
    41.6666666666% {

    }
    50% {
      top  : 14px;
      left : 14px;
    }
    58.3333333333% {
      top  : 0;
      left : 14px;
    }
    66.6666666666% {

    }
    75% {
      top  : 0;
      left : 14px;
    }
    83.3333333333% {
      top  : 0;
      left : 0;
    }
    91.6666666666% {

    }
    100% {

    }
  }


  @-webkit-keyframes dotTwoKeyframes {
    0% {
      top  : 0;
      left : 14px;
    }
    8.3333333333% {
      top  : 0;
      left : 0;
    }
    16.6666666666% {

    }
    25% {
      top  : 0;
      left : 0;
    }
    33.3333333333% {
      top  : 14px;
      left : 0;
    }
    41.6666666666% {

    }
    50% {
      top  : 14px;
      left : 0;
    }
    58.3333333333% {
      top  : 14px;
      left : 14px;
    }
    66.6666666666% {

    }
    75% {
      top  : 14px;
      left : 14px;
    }
    83.3333333333% {
      top  : 0;
      left : 14px;
    }
    91.6666666666% {

    }
    100% {

    }
  }

  @-webkit-keyframes dotThreeKeyframes {
    0% {
      top  : 14px;
      left : 14px;
    }
    8.3333333333% {
      top  : 0;
      left : 14px;
    }
    16.6666666666% {

    }
    25% {
      top  : 0;
      left : 14px;
    }
    33.3333333333% {
      top  : 0;
      left : 0;
    }
    41.6666666666% {

    }
    50% {
      top  : 0;
      left : 0;
    }
    58.3333333333% {
      top  : 14px;
      left : 0;
    }
    66.6666666666% {

    }
    75% {
      top  : 14px;
      left : 0;
    }
    83.3333333333% {
      top  : 14px;
      left : 14px;
    }
    91.6666666666% {

    }
    100% {

    }
  }
</style>
