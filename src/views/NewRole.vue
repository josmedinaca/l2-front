<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2">
        <div id="signUp" class="mt-5">

          <form class="border border-primary rounded form-inline" @submit="signUp">

            <h2 class="col-12 text-center text-primary mt-3 mb-5">Registrar nuevo rol</h2>

            <div class="form-group col-12">
              <label class="custom-label col-md-3" for="roleName">Nombre del rol</label>
              <input id="roleName" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="text"
                     placeholder="Rol" v-model="roleName" required/>
            </div>


            <div class="col-12 col-sm-5 col-md-5 mb-3">
              <button class="col-sm-12 col-md-12  offset-md-11 btn btn-primary" type="submit">
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

  const path = '/crearRol/';

  export default {
    name: "newRole",
    data( ){
      return{
        roleName:'',
        response: null
      }
    },
    methods:{
      signUp( event ){
        axios
          .post( this.$store.state.backURL + path,
            {
              roleName: this.roleName.trim( )
            }
          ).then( response => {
            if( response.status !== 201 ){
              alert( "Error en el almacenamiento del rol" )
            }else{
              alert( "Rol registrado correctamente" )
            }
          }).catch( error =>{
            if( error.response.status === 400 ){
              alert( "Parece que ya existe un rol con el nombre \"" + this.roleName + "\"" );
            }else{
              alert( "Error en la aplicación" );
            }
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
