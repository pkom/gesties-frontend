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
                v-model="cursoSeleccionado">
                  <option v-for="curso in cursos" v-bind:value="curso.id">{{ curso.curso }}
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

<script src="./login.js"></script>
<style src="./login.css"></style>
