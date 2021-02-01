<template>
    <div class="Post" id="app">
        <div >
            <h1> {{post.title}} </h1>           
            <div class="post-box">
                 <div class="box-button" v-if="post.userId == userId || user.role == 'role.Admin'" >
                    <button  class="button-red" @click="DeletePost(post.id)" title="supprimer le post">X</button>
                </div>
                <p> {{ post.content}} </p>
                <img :src="`/images/${post.image}`" :alt="post.image"> 
                <Likes></Likes>
                <p> posté par {{post.name}} le {{ post.datePost}}  </p>
            </div>                       
        </div >
       <Commentaires></Commentaires>
    </div>
</template>

<script>
import http from '../http';
import Commentaires from '@/components/Commentaires-components.vue'
import Likes from '@/components/Likes-components.vue'

    export default {
        name:"Post",
        components: {
        Commentaires,
        Likes,
    },
    data() {
        return {           
            post: {},
            commentaires: null,
            commentaire: null,           
            error: null,
            user: null,
            userId: localStorage.getItem('user'),
        } 
    },
    beforeCreate() {
        const userId = localStorage.getItem('user');    
        console.log("userid post",userId);
        http.get(`/auth/${userId}`)
            .then(response => {
            this.user = response.data[0];
            console.log("user", this.user);
        });
    },
    created() {       
        const id = this.$route.params.id; 
           
        http.get(`/posts/${id}`)
        .then(response => {
            console.log("datapost",response.data);
            this.post = response.data[0];       
        })
    },    
    beforeMounted() {
        this.$router.go();
    },

    methods: {
        DeletePost(id) {
            http.delete(`/posts/${id}`)
            .then(() => {
                this.$router.push( {name:"Home"});
            })
        } 
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
        align-self: flex-end;
    }
    .box-button {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    img {
        max-width: 90%;
    }
    .like-buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .like, .dislike {
        width: 20px;
        margin: 10px;
    }
</style>