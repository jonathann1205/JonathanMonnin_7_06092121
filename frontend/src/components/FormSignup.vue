<template>
<div>
  <div>
    <BtnCone/>
  </div>
  <h1>Inscription</h1>
  <div class="box-form d-flex justify-content-center align-items-center ">
    <b-form class="col-8 col-md-4" @submit="onSubmit" >

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
          type="password"
          placeholder="mot de passe"
          name="password"
          class="{ 'is-invalid': isSubmitted && $v.Form.password.$error }"
          required
        ></b-form-input>
        <span class="error" v-if="(!$v.form.password.isPasswordStrong) && submited ">Votre mot de passe doit contenir minimum 8 caractères avec au moins une minuscule, une majuscule, un chiffre et un caractère spécial.</span>
      </b-form-group>
      <span class="error " v-if="responseError ">Compte déjà éxistant!</span>
      <div >
        <b-button class="button " type="submit" variant="primary">Inscription</b-button>
      </div>
      
    </b-form>
    
  </div>
</div>
  
</template>

<script>
import axios from 'axios';
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import { required,  } from 'vuelidate/lib/validators'
import BtnCone from './btnCone.vue';
  export default {
    name:"formSignup",
    components: {
      BtnCone,
    
    },  
    data() {
      return {
        form: {
          
          firstname: '',
          lastname:'',
          jobtitle:'',
          email: '',
          password: '',
          
        },
        responseError:false,
        submited: false,
      }
      
    },
    validations: {
      form:{
        password:{
          required,
          isPasswordStrong(password) {
              const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&-_]){8,}/;
              return regex.test(password);
          }
      
        }
      
      }
      
      
        
    },      
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.$v.$touch();
        this.submited = true;
        // console.log(!this.$v.password.isPasswordStrong);
        // console.log(!this.$v.password.$dirty);
         
    
        let tutorials ={
              "lastname": this.form.lastname,
              "firstname": this.form.firstname,
              "jobtitle": this.form.jobtitle,
              "email": this.form.email,
              "password": this.form.password
          }
           

          const url = "http://localhost:3000/api/auth/signup"
           
        if(!this.$v.$invalid) {     
          axios.post(url, tutorials)
            .then(function (response) {
            console.log(response);
            alert('Votre compte a bien été créé! Vous pouvez à présent vous connecter!');
            location.replace("http://localhost:8080/#/")
            })
            .catch(error => {
            console.log(error);
            this.responseError = true;
            });
        
        }
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

.error{
  background-color: #CF5158;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  
  border-radius: 5px;
}

#input-2{
  margin-bottom: 1rem;
}


</style>
