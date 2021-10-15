<template>
    <div id="Navbar"> 
       <nav class="navbar navbar-expand  " id="nav">
            <a href="">
              <div  class="logo">
                <img alt="Vue logo" src="../assets/icon-left-font-monochrome-white.svg">
              </div>
            </a>
              <div class="navbar-nav mr-auto">
                <li class="nav-item" v-if="!connecter">
                  <router-link to="/Signup" class="nav-link 1"  >Inscription</router-link>
                </li>
                <li class="nav-item" v-if="!connecter">
                  <router-link to="/" class="nav-link 2"   >Connexion</router-link>
                </li>
                <li class="nav-item" >
                  <router-link to="/Deconnexion" class="nav-link 3"   >Deconnexion</router-link>
                </li>
              </div>
              <div class="line"></div>
          </nav>
    </div>
</template>


<script>



export default {


  data(){
    return {
      connecter:null,
    }
  },
  methods: {
    
       
  },

 
  

 

}

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav{
  display: flex;
  justify-content: space-between;
}
.navbar-expand{
  background-color: #132442;
  width: 100%;
  height: 8rem;
  
  
    & .logo{
      margin-left: 2%;
    }
    & img{
      
       width: 300px;
    }

    &.router-link {
      color: #ffffff;

    }
    
   & .line{
        position:absolute;
        top: 70%;
        left: 2%;
        width: 95%;
        height: 6px;
        background-color:#CF5158;
        border-radius: 5px;
            @media (max-width: 710px) {
                top:42%;
            }
        }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #CF5158;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
