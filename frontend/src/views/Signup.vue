<template>
    <div>
        <h1>Inscription</h1>
        <formSignup/>
    </div>
</template>




<script>

import formSignup from '@/components/FormSignup.vue'


export default {
  name:"Signup",  
  components: { 
      formSignup,

  },
        
}
</script>



<style lang="sass" scoped>

</style>