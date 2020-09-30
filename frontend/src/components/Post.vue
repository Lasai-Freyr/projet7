<template>
    <div class="Post" id="app">
        <p> {{post.title}} </p>
        <p> {{ post.content}} </p>
        <!-- post.image -->
        <p> posté par {{post.name}} </p>
        <p> posté le {{ post.datePost}} </p>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name:"Post",
        el: "#app",
    data() {
        return {
           
            post: {},  
            error: null
        
        } 
    },
    
    mounted() {    
   //DeletePost(id) {
   //console.log("axios del post");
   //axios.delete(`http://localhost:8080/api/posts/:${id}`)
   //}
   //{
    const id = this.$route.params.id;
    console.log(id);
     axios.get(`http://localhost:8080/api/posts/${id}`)
     .then(response => {
         console.log("son goku")
         console.log(response.data);
         this.post = response.data[0];
       // JSON responses are automatically parsed.
     })
   }
}
</script>
