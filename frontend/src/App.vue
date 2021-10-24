<template>
  <div id="app">
    <nav class="navbar navbar-expand d-flex flex-wrap " id="nav">
      <div  class="logo">
        <img alt="Vue logo" src="./assets/icon-left-font-monochrome-white.svg">
      </div>
      <div class="line"></div>
    </nav>
    <div>
      <router-view />
    </div>
  </div>
</template>


<script>



export default {
  data(){
    return {
      
    }
  },
  




 
  

 

}

</script>


<style lang="scss">
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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

.navbar-expand{
  background-color: #132442;
  width: 100%;
  height: 8rem;
  
  
    & .logo{
      margin-left: 0%;
      @media (max-width: 350px) {
        margin-left: 0%;
      }
    }
    & img{
      
      width: 300px;
      @media (max-width: 350px) {
        width: 260px;
      }
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
                top:15%;
            }
        }
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  a {
    font-weight: bold;
    color: #CF5158;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}

.nav-item{
  margin-right: 2rem;
}
</style>
