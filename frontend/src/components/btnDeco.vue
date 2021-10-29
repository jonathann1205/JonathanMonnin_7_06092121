<template>
  <div id="deconnexion"> 
    <b-button class="btn-deconnexion   rounded mb-2 " v-on:click="ConnectFalse" > Deconnexion</b-button>
  </div>
</template>

<script>

export default {


  data(){
    return {
      
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

</style>
