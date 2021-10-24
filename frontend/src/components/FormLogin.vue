<template>
  <div>
    <div>
      <BtnInscrip/>
    </div>
    <h1>Connexion</h1>
    <div class="box-form d-flex justify-content-center  ">
      <b-form class="col-10 col-md-4  " @submit="onSubmit"  >
        <b-form-group class="input" id="input-group-1" label="Email " label-for="input-1" description="">
          <b-form-input id="input-1" v-model="form.email" type="email" placeholder=" Email" required></b-form-input>
        </b-form-group>

        <b-form-group class="input"  id="input-group-2" label="Mot de passe" label-for="input-2">
          <b-form-input id="input-2" v-model="form.password" placeholder="Mot de passe" required></b-form-input>
        </b-form-group>

        <span class="error " v-if="responseError ">{{responseTextError}}</span>
        
        <div >
          <b-button class="button" type="submit"   variant="primary">Connexion</b-button>
        </div>
        
      </b-form>
      
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import BtnInscrip from './btnInscrip.vue';




  export default {
    components: {
      BtnInscrip
    
    },
    data() {
      return {
        form: {
          email: '',
          password: '',
          
          
        },
        responseError: false, 
        responseTextError :'',
     
      }
    },
     
    methods: {
      onSubmit(event) {
        event.preventDefault()
        
            let userLogin ={
                
                "email": this.form.email,
                "password": this.form.password
            }
          console.log(userLogin);

          const url = "http://localhost:3000/api/auth/login"
          
             
          axios.post(url, userLogin)
            .then(function (response) {
              localStorage.setItem('token',response.data.token)
              localStorage.setItem('userId', parseInt(response.data.id));
              localStorage.setItem('lastname', (response.data.lastname));
              location.replace("http://localhost:8080/#/Mur")
              localStorage.setItem('connect', true);  
              
            })
            .catch(error => {
            this.responseTextError = error.response.data.error ;
            this.responseError = true;
            
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

.input{
  // margin-top: 1.5rem;
  margin-bottom: 1rem;
  
}

.error{
  background-color: #CF5158;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 5px;
}


</style>
