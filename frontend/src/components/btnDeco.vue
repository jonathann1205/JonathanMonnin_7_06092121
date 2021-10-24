<template>
    <div id="deconnexion"> 
       <b-button class="btn-retour col-12  rounded  " v-on:click="ConnectFalse" > Deconnexion</b-button>
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
