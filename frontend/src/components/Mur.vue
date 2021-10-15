<template>
  <div class="card text-center m-3">
    <h5 class="card-header">Simple GET Request</h5>
    <div class="card-body">Total vue packages: {{totalVuePackages}}</div>
    <div class="card-body">Error message: {{errorMessage}}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "get-request",
  data() {
    return {
      totalVuePackages: null,
      errorMessage: null
    };
  },
  created() {
    // Simple GET request using axios
    axios.get("http://localhost:3000/api/post")
      .then(response => this.totalVuePackages = response.data.total)
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
  }
};
</script>

<style lang="scss" scoped>


    #contener{
        display:flex;
        justify-content: center;
            & #mur{
            background-color: aquamarine;
            width: 40%;
            height: 100vh;
            display: flex;
            justify-content: center;
            }

            & #commente{
                background-color: beige;
                width: 90%;
                height: 200px;
                
            }
    }


</style>