<template>
    <div class="Post" id="app">
        <div >
            <h1> {{post.title}} </h1>
            <div>
                <button class="button-red" @click="DeletePost(post.id)" title="supprimer le post">X</button>
            </div>
            <div class="post-box">                
                <p> {{ post.content}} </p>
                <img :src="`/images/${post.image}`" :alt="post.image"> 
                <p> posté par {{post.name}} </p>
                <p> posté le {{ post.datePost}} </p>
            </div>            
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

<style>
    .post-box {
        border: solid black 1px;
        width: 80%;
        margin: auto;
        border-radius: 20px;
        box-shadow: gray 4px 4px;
    }
    .button-red {
        background-color: #ff0000;
    }
</style>