<template>
     <div >
        <div>
            <form class="com-form" @submit="addCom()"> 
                <p>
                    <label for="name">Votre commentaire : </label> 
                    <textarea classe="inputText" name="content" id="content" type="content" v-model="content" height="50px"></textarea>
                </p>
                <p> <input class='button' type="submit" value="Commenter" @submit="addCom()"> </p>
            </form>
        </div>
        <div>
            <ul v-if="commentaires && commentaires.length">
                <li v-for="commentaire of commentaires" v-bind:key="commentaire.id">
                    <div class="comment-box"> 
                    <div class="firstLine">
                        <p class="user">{{commentaire.name}} :</p>
                        <div class="box-button" v-if="commentaire.userId == userIdCom  || user.role == 'role.Admin'" >
                            <button class="button-red" @click="DeleteCommentaire(commentaire.id)" >X</button>
                        </div>
                    </div>
                    <p class="comments"> {{ commentaire.content }}</p>
                    <p class="comment-date"> posté le {{ commentaire.dateCommentaire}}. </p>
                    </div>                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>
<script>
import http from '../http';


export default {
    name: "commentaires",
    data(){
        return{
            commentaires: null,
            commentaire: null,
            content: null,
            form: null,  
            userIdCom: sessionStorage.getItem('user')             
        }
    },
    beforeCreate() {
         const userId = sessionStorage.getItem('user');
         http.get(`/auth/${userId}`)
            .then(response => {
            this.user = response.data[0];
        })
    },
    mounted() {
        const userIdCom = sessionStorage.getItem('user');
        http.get(`/commentaires`)
            .then(response => {
                this.commentaires = response.data;
            })
            .catch(e => {
                this.errors.push(e)
            })
        },
    methods: {
        addCom() {
            const form = new FormData();
            form.append("content", content.value);
            http.post(`/commentaires`, content, {'Content-Type': 'multipart/form-data' })
            .then(response => {
            })
            .catch(e => {
                this.errors.push(e)
            })
        },        
         DeleteCommentaire(commentId) {
            http.delete(`/commentaires/${commentId}`)
             .then(response => {                
               this.$router.go();
            })
            .catch(e => {
                this.errors.push(e)
            })
        } 
    },
}
</script>

<style>
    .com-form {
        border: solid black 1px;
        width: 70%;
        margin: auto;
        margin-top: 15px;
        border-radius: 20px;
        box-shadow: gray 4px 4px;
    }
    .button {
        margin: 10px;
        border-radius: 12px;
        background-color: #288dcf;
        color: rgb(255, 255, 255);
        font-weight: bold;
        }
    .comments {
        background-color: #f0d8d8f1;
        width: 75%;
        margin: auto;
        margin-left: 5px;
        font-size: 18px;
    }
    .comment-box {
        display:flex;
        flex-flow: wrap;
        flex-direction: column; 
        align-content: center; 
    }
    .comment-date {
        width: 250px;
        font-size: 14px;
        text-align: end;
        margin-right: 15px;
    }
    .user {
        width: 200px;
        font-size: 16px;
        text-align: end;
    }
    ul {
        margin: auto;
        width: 70%;
        padding: 0px;
    }
    .button-red {
        background-color: #ff0000;
        align-self: flex-end;
    }
    .button-red:hover {
     cursor: pointer;
    }
    .box-button {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .firstLine {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
</style>