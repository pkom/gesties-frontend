<template>
  <div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Introduce tus credenciales para iniciar sesión</p>

      <form @submit.prevent="onLogin">
        <div class="row">
          <div class="col-xs-12 col-md-offset-4 col-md-4">
            <div class="form-group has-feedback">
              <select
                class="form-control" 
                v-model="selectedCourse">
                  <option v-for="course in courses" v-bind:value="course.id" :key="course.id">{{ course.course }}
                  </option>
              </select>  
            </div>
          </div>
        </div>      
        <div class="row">
          <div class="col-xs-12 col-md-offset-4 col-md-4">
            <div class="form-group has-feedback">
              <input 
                class="form-control" 
                placeholder="Usuari@"
                v-model="user.name">
              <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-offset-4 col-md-4">
            <div class="form-group has-feedback">
              <input 
                type="password" 
                class="form-control" 
                placeholder="Contraseña"
                v-model="user.password">
              <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-offset-4 col-md-4">
            <button 
              type="submit" 
              class="btn btn-primary btn-block btn-flat"
              :disabled="isFormEmpty">Entrar</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Login',
    data () {
      return {
        user: { name: null, password: null },
        selectedCourse: 2
      }
    },
    computed: {
      isFormEmpty () {
        return !(this.user.name && this.user.password)
      },
      ...mapGetters([
        'courses',
        'error'
      ])
    },
    methods: {
      onLogin () {
        this.$store.dispatch('loginUser', { user: this.user.name, password: this.user.password, course: this.selectedCourse })
      }
    }
  }
</script>
