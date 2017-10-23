<template>
  <div id="app">
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
</template>

<script>
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
    }
  }
</script>

<style>
</style>
