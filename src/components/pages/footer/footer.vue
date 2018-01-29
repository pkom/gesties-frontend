<template>
  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="pull-right">
      <strong>Copyright &copy; 2018 <a href="mailto:francisco.mora.sanchez@gmail.com">Francisco Mora Sánchez</a></strong>
    </div>
    <!-- Default to the left -->
    <strong> {{ center.code }} - {{ center.name }} </strong> 
  </footer>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Footer',
    computed: {
      ...mapGetters([
        'center',
        'showLoader'
      ])
    }
  }
</script>

