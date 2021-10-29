<template>
  <div id="profil"> 
    <b-button class="btn-prolfil   rounded mb-2 " v-on:click="pageProfil" >Mon profil</b-button>
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
  
}


</style>
