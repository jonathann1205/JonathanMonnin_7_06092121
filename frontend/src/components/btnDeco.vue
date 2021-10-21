<template>
    <div id="deconnexion"> 
       <b-button class="btn-retour col-12  rounded  " v-on:click="ConnectFalse" > Deconnexion</b-button>
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
    ConnectFalse(){

      console.log("localstorage Cleared");
      localStorage.clear();
      this.$router.push('/');
      this.$forceUpdate();
        
    }
       
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
