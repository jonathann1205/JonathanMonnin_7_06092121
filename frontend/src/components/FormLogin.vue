<template>
  <div class="box-form d-flex justify-content-center align-items-center ">
    <b-form class="col-4" @submit="onSubmit"  >
      <b-form-group
        id="input-group-1"
        label="Email "
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder=" email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group  id="input-group-2" label="mot de passe" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="mot de passe"
          required
        ></b-form-input>
      </b-form-group>

      
      <div >
        <b-button class="button" type="submit"  variant="primary">Connexion</b-button>
      
      </div>
      
    </b-form>
    
  </div>
</template>

<script>
import axios from 'axios';


  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        
        },
        
    
      }
    },
  
    methods: {
      onSubmit(event) {
        event.preventDefault()
        
            let userLogin ={
                
                "email": this.form.email,
                "password": this.form.password
            }
           

            const url = "http://localhost:3000/api/auth/login"
           
             
          axios.post(url, userLogin)
            .then(function (response) {
              localStorage.setItem('token',response.data.token)
              localStorage.setItem('userId', parseInt(response.data.id));
              location.replace("http://localhost:8080/#/Mur")  
              
            })
            .catch(function (error) {
            console.log(error);
            });
        
        

      },


    
   },
    
  }
  

  
</script>


<style lang="scss" scoped>
.box-form{
  height: 500px;
}
.button{
  margin: 1rem;
}



</style>
