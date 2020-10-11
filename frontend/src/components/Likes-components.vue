<template>
    <div class="like-buttons" :key="SuperKey">
        <div class="likes">
            <button id="button-like" v-bind:class="activeLike ? 'activeLike' :'notActive'" >
                <i class="like fas fa-thumbs-up" @click="onLike()"></i>
            </button >
            <span>{{ post.likes }}</span>
        </div>
        <div class="dislikes" >
            <button v-bind:class="activeDislike ? 'activeDislike' :'notActive'">
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
            isActive: true,
            isNotActive: false
            
        }
       
    },    
    beforeCreate() {       
        const id = this.$route.params.id;
        const userId = localStorage.getItem("user");
        console.log("id", id);      
        http.get(`/posts/${id}`)
        .then(response => {
            console.log("post : ", response.data[0]);  
            this.post = response.data[0];
            console.log("usersliked", this.post.usersLiked);
            if ( this.post.usersLiked.includes(userId)) {
                console.log("blabla");
                 this.activeLike = true
                 this.activeDislike = false   
                return 
            } else {  
                if ( this.post.usersDisliked.includes(userId)) {
                    console.log("blabla2");
                   this.activeLike = false
                    this.activeDislike = true
                } else {
                    this.activeLike = false
                    this.activeDislike = false
                }
                                  
                   
                
            }
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
                 if ( !this.activeLike) {
                     return { activeLike: this.isActive}
                 } else {
                     return { activeLike: false}
                 }
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
        }
    }    
}
</script>

<style>
     .activeLike {
        background-color: green;
    }
    .activeDislike {
        background-color: #ce0000;
    }
</style>