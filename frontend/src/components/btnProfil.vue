<template>
  <div id="profil"> 
    <b-button class="btn-retour col-12  rounded  " v-on:click="pageProfil" >Mon profil</b-button>
  </div>
</template>

<script>

export default {


  data(){
      return{
     
   }
  },
  methods: {
    pageProfil(){
      this.$router.push('/Profil');  
    }
       
  }, 

}

</script>


<style lang="scss">

#profil{
  margin-bottom: 3rem;
  margin-left: 4rem;
}


</style>
