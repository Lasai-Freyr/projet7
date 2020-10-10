<template>
    <div class="like-buttons" :key="SuperKey">
        <div class="likes">
            <button class="button-like" >
                <i class="like far fa-thumbs-up" @click="onLike()"></i>
            </button >
            <span>{{ post.likes }}</span>
        </div>
        <div class="dislikes">
            <button>
                <i class="dislike fas fa-thumbs-down" @click="onDislike()" ></i>
            </button>
            <span>{{ post.dislikes }}</span>
        </div>
    </div> 
</template>

<script>
import http from '../http';

export default {
    name:"Likes",
    data() {
        return {
            post: {},
        }
       
    },    
    beforeCreate() {       
        const id = this.$route.params.id;
        console.log("id", id);      
        http.get(`/posts/${id}`)
        .then(response => {
            console.log("post : ", response.data[0]);  
            this.post = response.data[0]; 
        })
    },
    created() {
        //userId = localStorage.getItem("user");

    },
    methods: {
        onLike() {
            console.log("liking");
            const id = this.$route.params.id;
            const userId = localStorage.getItem("user");
            const like =  1;
            const data = { "userId": userId,"like": like};
            http.post(`/posts/${id}/like`,{data} )
            .then(() => {
                 console.log("liked");
                 this.SuperKey =+1;
                  this.$forceUpdate()
            });
        },
        onDislike() {
            console.log("disliking");
            const id = this.$route.params.id;
            const userId = localStorage.getItem("user");
            const like =  -1;
            const data = { "userId": userId,"like": like};
            http.post(`/posts/${id}/like`,{data} )
            .then(() => {
                 console.log("disliked");
                  this.$forceUpdate()
            });
        },
        
    },
    computed: {
        
    }
    
}
</script>