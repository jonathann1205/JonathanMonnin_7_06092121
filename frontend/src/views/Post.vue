<template>
  <div class="Post">
      <PostOne/> 
  </div>
</template>

<script>
import PostOne from '../components/PostOne.vue'

export default {
  name: 'Post',
  components: {
    PostOne
  }
}
</script>
