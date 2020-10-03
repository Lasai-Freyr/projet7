<template>
    <div class="Post" id="app">
        <div >
            <p> {{post.title}} </p>
            <button @click="DeletePost(post.id)">X</button>
            <p> {{ post.content}} </p>
            <img :src="`./assets/images/${post.image}`" :alt="post.image"> 
            <p> posté par {{post.name}} </p>
            <p> posté le {{ post.datePost}} </p>
        </div>
       <Commentaires></Commentaires>
    </div>
</template>

<script>
import axios from 'axios';
import Commentaires from '@/components/Commentaires-components.vue'
    export default {
        name:"Post",
        components: {
        Commentaires
    },
    data() {
        return {           
            post: {},            
            error: null        
        } 
    },
    methods: {
        DeletePost(id) {
            console.log("axios del post");
            axios.delete(`http://localhost:8080/api/posts/${id}`)
            .then(() => {
                this.$router.push( {name:"Home"});
            })
        },    
    },    
    mounted() {       
        const id = this.$route.params.id;
        console.log(id);
        console.log("gogeta");
        axios.get(`http://localhost:8080/api/posts/${id}`)
        .then(response => {
            console.log("son goku")
            console.log(response.data);
            this.post = response.data[0];       
        })
    }   
}
</script>
