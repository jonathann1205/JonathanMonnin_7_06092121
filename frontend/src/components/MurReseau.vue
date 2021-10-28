<template>
  <div class="bodyPost">
    <div class=" col-12  d-flex flex-row justify-content-center ">
      <div class="createPost">
      <CreatePost/> 
      </div>
      <div class="btnDeco">
          <BtnDeco/>
      </div>
      <div class="btnProfil">
          <BtnProfil/>
      </div>
    </div>
    
    <div class="col-12 post">
      <div class="d-flex flex-row">
        <h1 class=" col-12 ">Ce que vos collegues ont posté</h1>    
      </div>
      <div class=" col-12  "  v-for="(article , idx) in articles" v-bind:key="idx">
        <a :href="'/#/Post?id='+article.id" class="  col-12 d-flex justify-content-center" >
          <div class="cardPost col-12 col-md-4 border rounded border-dark m-1 ">
            <h2>{{article.message}}</h2>
            <b-card-group deck>
              <b-card class="cardPostImg" :img-src="article.image" img-alt="Card image" img-top>
                <b-card-text>
                  <p>Poster par {{article.lastnameUser}} </p>
                </b-card-text>
                  
              </b-card>
            </b-card-group>
          </div>
        </a>
      </div>
    </div>    
  </div>            
</template>

<script>
import axios from "axios"
import CreatePost from "./CreatePost.vue";
import BtnDeco from "./btnDeco.vue";
import BtnProfil from "./btnProfil.vue";




export default {
    components: {
    CreatePost,
    BtnDeco,
    BtnProfil
},
   
        data() {
            return {
                articles:null,
                loading: true,
                errored: false
            }
        },
        methods:{
       
           
        
        },
        mounted () {
            const token = localStorage.getItem('token');

             const header = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };

           axios
            .get('http://localhost:3000/api/post', header)
            .then(res=>  {
                const data = res.data;
                this.articles = data;
              
                
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
            
            
        },    
        
      

            
}
</script>

<style lang="scss" scoped>

a {
  color: white;
  text-decoration:none;
  :visited{
    color: white;
  }
  :link{
    list-style: none;
  }
}
.post {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.bodyPost{
    background-color:#cf5157b7 ;
    
}
.cardPost{
    background-color:#132442 ;
    
}
.cardPostImg{
    
    background-color:#132442 ;
    
}

.createPost{
    margin-right: 5rem;
}


</style>