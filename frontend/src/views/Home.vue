<template>
  <div class="home">
    <formLogin/>
  </div>
</template>

<script>


import formLogin from '@/components/FormLogin.vue'


export default {
  name: 'Home',
  components: {
    formLogin,
    
  }
}
</script>
