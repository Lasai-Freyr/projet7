<template>
    <div class="like-buttons" id="likes" >
        <div class="likes" >
            <button id="button-like" v-bind:class="activeLike ? 'activeLike' :'notActive'"  @click="onLike()" >
                <i class="like fas fa-thumbs-up"></i>
            </button >
            <span >{{ post.likes }}</span>
        </div>
        <div class="dislikes" >
            <button v-bind:class="activeDislike ? 'activeDislike' :'notActive'" @click="onDislike()">
                <i class="dislike fas fa-thumbs-down"  ></i>
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
            activeLike: null,
            activeDislike: null,
            componentKey: 0,
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
                 this.activeLike = true
                 this.activeDislike = false   
                return 
            } else {  
                if ( this.post.usersDisliked.includes(userId)) {
                   this.activeLike = false
                    this.activeDislike = true
                } else {
                    this.activeLike = false
                    this.activeDislike = false
                }
                                  
                   
                
            }
        })
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
                 
                //this.$router.go()
            });
            if ( this.post.usersLiked.includes(userId)) {
                      this.activeLike = false
                    this.post.likes--; 
                } else {
                    if ( !this.post.usersLiked.includes(userId)) {
                        this.activeLike = true
                        this.post.likes++;
                    }
                }
            //this.$router.$forceUpdate()
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
                  this.post.dislikes++;
                 this.$router.go()
            });
            //this.$forceUpdate()
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