<template>
            <div>
            <!--Bouton pour poster un message-->
            <b-button @click="show=true" v-model="articles" class="modal__button">COMMENTER</b-button>
            
            <b-modal v-model="show" title="Création d'un commentaire" class="modal__title">
                <b-container fluid>
                    <div class="article">
                        <form method="POST" v-on:submit.prevent="createCommentaire()">
                        <div>
                            <input class="article__input" type="textarea" name="message" aria-label="Contenu du message" v-model="message" placeholder="Votre message ...">
                            <span v-if="(!$v.message.required && $v.message.$dirty) && submited">Veuillez ajouter un message</span><br>
                        </div> 
                        <div>
                            <input class="article__file" type="file" name="image" aria-label="Fichier à sélectionner" @change="onFileSelected">
                            <span v-if="(!$v.selectedFile.required && $v.selectedFile.$dirty) && submited">Veuillez ajouter une image</span>
                            <span v-if="selectedFile">Image sélectionnée : {{ selectedFile.name }}</span><br>
                        </div> 
                            <button class="article__button" type="submit" id="btn-send-publication">COMMENTER</button>
                        </form>
                    </div>
                </b-container>
                <!--Footer du modulable-->
                <template #modal-footer visibilite="false">
                    <div></div>
                </template>
            </b-modal>
        </div>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import axios from 'axios'
import { required } from 'vuelidate/lib/validators'

export default {
    name: 'commentaire',
    data(){
        return{
            articles:'',
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
           
        },
        createCommentaire(){
            this.submited = true;
            this.$v.$touch();
            if (!this.$v.$invalid){
                const articleId = this.$route.query.id;
                const userId = parseInt(localStorage.getItem('userId'));
                const token = localStorage.getItem('token');
                const lastname = (localStorage.getItem('lastname'));
                let fd = new FormData();
                fd.append('userId', userId);
                fd.append('lastname', lastname);
                fd.append('articleId', articleId);
                fd.append('message', this.message);
                fd.append('image', this.selectedFile, this.selectedFile.name);
                console.log(fd);
                axios.post('http://localhost:3000/api/commentaire', fd, 
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then(() => {
                    alert('Votre commentaire a bien été enregistré !');
                    sessionStorage.clear();
                    document.location.reload();
                })
                .catch(error => console.log(error));
            }
        }
    }
}



</script>