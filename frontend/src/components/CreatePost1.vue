
   
<template>
  <div class="file">
   <form @submit.prevent="onSubmit" >
      <div class="fields">
        <label>Upload File</label><br/>
        <input 
          type="file"
          ref="file"
          @change="onSelect"
        />
      </div>
      <div class="fields">
        <button>Submit</button>
      </div>
      <div class="message">
        <h5>{{message}}</h5>
      </div>
   </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'FileUpload',
  data() {
    return {
      file:"",
      message:"houlla"
      
    }
  },
  methods: {
    onSelect(){
      
      const file = this.$refs.file.files[0];
      this.file = file;
      // if(!allowedTypes.includes(file.type)){
      //   this.message = "Filetype is wrong!!"
      // }
      // if(file.size>500000){
      //   this.message = 'Too large, max size allowed is 500kb'
      // }
    },
    async onSubmit(){

      const userId = parseInt(localStorage.getItem('userId'));
      const token = localStorage.getItem('token');

      const fD = {
        userId: userId,
        // file: this.file,
        message: this.message
      }

      // const fD = new FormData() 
      // fD.append('userId', userId);
      // fD.append('file',this.file);
      // fD.append('message', this.message);


      console.log(fD)
      try{
        await axios.post('http://localhost:3000/api/post', fD, {

           headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
           }            
        });
        console.log ('Uploaded!!')
      }
      catch(err){
        console.log(err);
        
      }
    }
  },
}
</script>
