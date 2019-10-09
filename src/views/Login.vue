<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2">
        <div id="signUp" class="mt-5">

          <form class="border border-primary rounded form-inline" @submit="signUp">

            <h2 class="col-12 text-center text-primary mt-3 mb-5">Login</h2>

            <div class="form-group col-12">
              <label class="custom-label col-md-3" for="username">Nombre de Usuario</label>
              <input id="username" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="text"
                     placeholder="Nombre de Usuario" v-model="username" required/>
            </div>

            <div class="form-group col-12">
              <label class="custom-label col-md-3 display" for="password">Contrase&ntilde;a</label>
              <input id="password" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="password"
                     placeholder="Contraseña" v-model="password" required/>
            </div>
            <div class="col-12 col-sm-6 col-md-5 offset-md-2 text-center mb-3">
                <span class="text-primary">
                  <small>
                    <a href="/registro">&iquest;No tienes cuenta? Registrarme</a>
                  </small>
                </span>
            </div>

            <div class="col-12 col-sm-5 col-md-4 mb-3">
              <button class="col-sm-10 col-md-10 offset-sm-1 offset-md-2 btn btn-primary" type="submit">
                Iniciar
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import axios from 'axios'

  const path = '/login';

  export default {
    name: "Login",
    data( ){
      return{
        username: '',
        password: '',
        response: null
      }
    },
    methods:{
      signUp( event ){
        axios
          .post( this.$store.state.backURL + path,
            {
              username: this.username.trim( ),
              password: this.password
            }
          ).then( response => {
            if( response.status !== 202 ){
              alert( "Usuario o contraseña errados" )
            }else{
              alert( "Login exitoso, bienvenido \"" + this.username +"\"" )
            }
          }).catch( error =>{
            
              alert( "Usuario o contraseña errados" );
            
            console.log( error );
          });
        event.preventDefault( );
        return true;
      }
    }
  }
</script>

<style scoped>
  .form-inline{
    width: auto;
  }

  .form-inline .form-group{
    margin-bottom: 1rem;
  }

  .custom-label{
    display: inline-block;
    justify-content: right !important;
    text-align: right !important;
  }

  @media (max-width: 767px) {
    .custom-label{
      display: none !important;
    }
  }
</style>
