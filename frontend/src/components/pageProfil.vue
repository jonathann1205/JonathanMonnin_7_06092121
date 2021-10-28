<template>
    <div class="profil col-12 d-flex justify-content-center flex-column align-items-center ">
        <b-button class="btn-retour col-5 col-md-3 rounded mb-5  " v-on:click="goBack()" >Retour</b-button>
            <div class="profil__info col-12 col-md-6 d-flex justify-content-center flex-column border rounded mb-5">
                <p class="profil__hello m-4 fs-2"> <strong>Bonjour</strong> {{users.lastname}} !</p>
                <p class="profil__para m-4 fs-4"> <strong>Voici les informations de votre compte :</strong> </p>
                <p class="profil__name m-4">  <strong>Nom:</strong>  {{users.firstname}}</p>
                <p class="profil__mail m-4"> <strong>Email:</strong>  {{users.email}}</p>
                <p class="profil__poste m-4">  <strong>Poste:</strong>  {{users.jobtitle}}</p>
                <p class="profil__compte m-4"> <strong>Creation du compte:</strong> {{ users.createdAt }}</p>
            </div>
            <div class="profil__delete">
                <!--Bouton pour supprimer l'article-->
                <button v-on:click="deleteUser(users.id), ConnectFalse()" class="profil__button rounded btn-danger p-2 " >Supprimer votre compte !</button>
            </div>
           
            
    </div>
</template>

<script>

import axios from 'axios' 

export default {
   
        components:{
        
    },
    data(){
        return {
            users: "",
            role: "",
            userId: localStorage.getItem('userId'),
            token: localStorage.getItem('token'),
         
        }
    },
    methods:{
        deleteUser(id){
            const userId = id;
            const token = localStorage.getItem('token');
            const url = 'http://localhost:3000/api/auth/' + userId
            axios.delete(url, {
                headers :{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(() => {
                alert('user supprimé');
            })
            .catch(error => console.log(error));
        },
        
          ConnectFalse(){

            console.log("localstorage Cleared");
            localStorage.clear();
            this.$router.push('/');
            

        },

        goBack() {
                 location.replace("http://localhost:8080/#/Mur")   
            }
    },

    mounted () {
        const id = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        const header = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        axios.get('http://localhost:3000/api/auth/'+ id, header)
        .then(res => {
            const data = res.data;
            this.users = data;
            console.log(res)
        })
        .catch(error => console.log({error}));

        
    }
    
}
</script>


<style lang="scss">

.profil__info{
    height: 500px;
}

</style>
