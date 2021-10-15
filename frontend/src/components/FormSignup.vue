<template>
  <div class="box-form d-flex justify-content-center align-items-center ">
    <b-form class="col-4" @submit="onSubmit"  v-if="show">

        <b-form-group  id="input-group-3" label="Nom" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.firstname"
          placeholder="Nom"
          required
        ></b-form-input>

      </b-form-group>
        <b-form-group  id="input-group-4" label="Prenom" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.lastname"
          placeholder="Prenom"
          required
        ></b-form-input>
      </b-form-group>

       
        <b-form-group  id="input-group-5" label="Poste" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.jobtitle"
          placeholder="Poste"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="Email " label-for="input-1">
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
        <b-button class="button" type="submit" variant="primary">Inscription</b-button>
      
      </div>
      
    </b-form>
    
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    name:"formSignup",  
    data() {
      return {
        form: {
          
          firstname: '',
          lastname:'',
          jobtitle:'',
          email: '',
          password: '',
          
        },
        
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        
          
    
          let tutorials ={
                "lastname": this.form.lastname,
                "firstname": this.form.firstname,
                "jobtitle": this.form.jobtitle,
                "email": this.form.email,
                "password": this.form.password
            }
           

            const url = "http://localhost:3000/api/auth/signup"
           
             
          axios.post(url, tutorials)
            .then(function (response) {
            console.log(response);
             location.replace("http://localhost:8080/#/")
            })
            .catch(function (error) {
            console.log(error);
            });
        
      },
     
    
    }
  }

  
</script>


<style lang="scss" scoped>

.button{
  margin: 1rem;
}

.form-group{
    margin-top: 1rem;
}

</style>
