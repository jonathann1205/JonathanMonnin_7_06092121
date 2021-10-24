<template>
    <div id="inscription"> 
       <b-button class="btn-retour col-12 col-md-4 rounded  " v-on:click="pageInscription" > Inscription</b-button>
    </div>
</template>

<script>

export default {


  data(){
   return{

   }
  },
  methods: {
    pageInscription(){
      this.$router.push('/Signup');  
    }
       
  }, 

}

</script>


<style lang="scss">
#inscription{
  margin-bottom: 4rem;
}
</style>
