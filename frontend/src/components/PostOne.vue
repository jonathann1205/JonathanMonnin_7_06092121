<template>
    
    <div>
       <h1>lfmqfùjq</h1>
        <div class=" col-12 d-flex justify-content-center" >
            <div class=" col-12 col-md-4 border rounded border-dark m-1 ">
                <h2>{{articles.message}}</h2>
                <b-card-group deck>
                    <b-card :img-src="articles.image" img-alt="Card image" img-top>
                       
                        <b-card-text class="comment">
                       <p>Poster par </p>
                        </b-card-text>
                    </b-card>
                </b-card-group>
                  <b-card-footer>
                    <!-- <createCommentaire /> -->
                    <a v-on:click="createComment(article.id)" class="article__comment">commentaire</a>
                    <!-- <Commentaires/> -->
                </b-card-footer>
            </div>
        </div>
        <div  class=" col-12  d-flex justify-content-center">
            <b-button v-on:click="deleteArticle(articles.id)" variant="danger">Supprimer</b-button>
            <b-button v-on:click="modifyArticles(articles.id)" variant="success"><ModifPost/></b-button>
        </div>
    </div>
        
    
</template>

<script>
import axios from "axios"
import ModifPost from "./ModifPost.vue";

export default {
        components: {
        ModifPost, 
      

        },   
        data() {
            return {
                articles:null,
                loading: true,
                errored: false,
                id:""
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
                alert('article supprimé');
                document.location.reload();
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
        
        },
        mounted () {
            const token = localStorage.getItem('token');

           
            this.id = this.$route.query.id
            
            console.log(this.id)
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
                console.log(data)
                
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
            
            
        },    
        
        
}
</script>

<style lang="sass" scoped>

</style>