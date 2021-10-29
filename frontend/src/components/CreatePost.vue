<template>
  <main>
    <div>
      
      <b-button @click="show=true" class="modal__button mb-2">Poster un message !</b-button>
      
      <b-modal v-model="show" title="Création d'un message" class="modal__title" ok-only>
          
        <b-container fluid>
          <div class="article">
            <form method="POST" v-on:submit.prevent="create()">
              <div>
                  <input class="article__input" type="textarea" name="message" aria-label="Contenu du message" v-model="message" placeholder="Votre message ...">
                  <span v-if="(!$v.message.required && $v.message.$dirty) && submited">Veuillez ajouter un message</span><br>
              </div>
              <div>
                  <input class="article__file" type="file" name="image" aria-label="Fichier à sélectionner" @change="onFileSelected">
                  <span v-if="(!$v.selectedFile.required && $v.selectedFile.$dirty) && submited">Veuillez ajouter une image</span>
                  <span v-if="selectedFile">Image sélectionnée : {{ selectedFile.name }}</span><br>
              </div>  
                <button class="article__button" type="submit" id="btn-send-publication">PUBLIER</button>
            </form>
          </div>
        </b-container>
        <template #modal-footer visibilite="false">
            <div></div>
        </template>
          
      </b-modal>
    </div>
  </main>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import axios from 'axios'
import { required } from 'vuelidate/lib/validators'
export default {
    name: 'CreateArticle',
    data(){
        return{
            message: '',
            selectedFile: null,
            submited: false,
            show: false,
        }
    },
    validations: {
        message: {
            required
        },
        selectedFile: {
            required
        }
    },
    methods:{
        onFileSelected(event){
            this.selectedFile = event.target.files[0];
            console.log(this.selectedFile);
        },
        create(){
            this.submited = true;
            this.$v.$touch();
            if (!this.$v.$invalid){
                const userId = parseInt(localStorage.getItem('userId'));
                const token = localStorage.getItem('token');
                const lastname = (localStorage.getItem('lastname'));
                let fd = new FormData();
                console.log(fd);
                fd.append('userId', userId);
                fd.append('lastname', lastname);
                fd.append('message', this.message);
                fd.append('image', this.selectedFile, this.selectedFile.name);
                axios.post('http://localhost:3000/api/post', fd, 
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then(() => {
                    alert('Votre post à bien été enregistré !');
                    document.location.reload();
                    
                })
                .catch(error => console.log(error));
            }
        }
    }
}
</script>