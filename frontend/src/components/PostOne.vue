<template>
    
    <div>
        <b-button class="btn-retour col-5 col-md-3 rounded  " v-on:click="goBack()" >Retour</b-button>
        <h1>lfmqfùjq</h1>
        <div class=" col-12 d-flex justify-content-center" >
            <div class=" col-12 col-md-4 border rounded border-dark m-1 ">
                <h2>{{articles.message}}</h2>
                <b-card-group deck>
                    <b-card :img-src="articles.image" img-alt="Card image" img-top>
                       
                        <b-card-text class="post">
                       <p>Poster par {{articles.lastnameUser}}  </p>
                        </b-card-text>
                    </b-card>
                </b-card-group>
                <b-card-footer>
                    <a  class="article__comment"><Commentaire/></a>
                    <div v-for="(commentaire , idx) in Commentaires" v-bind:key="idx">
                        <p>Commenter par {{commentaire.lastnameUser}} </p>
                        <b-card :img-src="commentaire.image" img-alt="Card image" img-top>
                        <b-card-text>
                        <p> {{commentaire.message}} </p>
                        </b-card-text>
                        
                    </b-card>
                        
                        
                    </div>   
                </b-card-footer>
            </div>
        </div>
        <div  class=" col-12  d-flex justify-content-center">
            <b-button v-on:click="deleteArticle(articles.id), deleteCommentaire(id)" v-if="articles.userId == this.userid" variant="danger">Supprimer</b-button>
            <b-button v-on:click="modifyArticles(articles.id)" v-if="articles.userId == userid" variant="success"><ModifPost/></b-button>
        </div>
    </div>
        
    
</template>

<script>
import axios from "axios"
import ModifPost from "./ModifPost.vue";
import Commentaire from "./Commentaire.vue";
export default {
        components: {
        ModifPost, 
        Commentaire

        },   
        data() {
            return {
                articles:null,
                loading: true,
                errored: false,
                id:"",
                userid: localStorage.getItem('userId'),
                Commentaires:null,
            }
        },
        methods:{

            // suprimer un post
             deleteArticle(id){
            const articleId = id;
            const token = localStorage.getItem('token');
            const url = 'http://localhost:3000/api/post/' + articleId
            axios.delete(url, {
                headers :{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(() => {
                alert('article et commentaire supprimés');
                location.replace("http://localhost:8080/#/Mur")
            })
            .catch(error => console.log(error));
            },

            // modifier le post
            modifyArticles(id){
            const articleId = this.$route.query.id;
            const token = localStorage.getItem('token');
            const url = 'http://localhost:3000/api/post/' + articleId
            axios.get(url, {
                headers :{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                console.log(res);
                sessionStorage.setItem('articleId', parseInt(res.data.id));
            })
            .catch(error => console.log(error));
            },


            // suprime les commentaires 
             deleteCommentaire(id){
                const articleId = this.id;
                const token = localStorage.getItem('token');
                const url = 'http://localhost:3000/api/commentaire/' + articleId
                axios.delete(url, {
                    headers :{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then(() => {
                    
                    console.log('commentaire supprimé');
                })
                .catch(error => console.log(error));

                
            },

            goBack() {
                 location.replace("http://localhost:8080/#/Mur")   
            }
        
        },
        mounted () {
            const token = localStorage.getItem('token');
            this.id = this.$route.query.id
            
            
             const header = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };
            //  recuperer le post 
           axios
            .get('http://localhost:3000/api/post/' + this.id, header)
            .then(res=> {
                const data = res.data;
                this.articles = data;
                
                
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false);



            //  recupraration des commentaires
            const articleId = this.id;
            
            const url = 'http://localhost:3000/api/commentaire/' + articleId
            axios.get(url, {
                headers :{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => {
                    const data = res.data;
                    this.Commentaires = data;
                    console.log(this.Commentaires);
                })
            .catch(error => console.log(error));
        },
            
            
         
        
        
}
</script>

<style  scoped>
.btn-retour{
    top:12.4%;
    font-size: 1.5rem;
    background-color: #CF5158;
}
</style>