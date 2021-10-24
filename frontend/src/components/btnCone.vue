<template>
  <div id="connexion"> 
    <b-button class="btn-retour col-12 col-md-4 rounded  " v-on:click="pageConnexion" > Connexion</b-button>
  </div>
</template>

<script>

export default {


  data(){
      return{
     
   }
  },
  methods: {
    pageConnexion(){
      this.$router.push('/');  
    }
       
  }, 

}

</script>


<style lang="scss">

#connexion{
  margin-bottom: 3rem;
}


</style>
