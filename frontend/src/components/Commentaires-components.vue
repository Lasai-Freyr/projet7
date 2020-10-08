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
                    <div class="box-button" v-if="commentaire.userId == userIdCom" >
                        <button class="button-red" @click="DeleteCommentaire(commentaire.id)" >X</button>
                    </div>
                    <p class="user">{{commentaire.name}} :</p>
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
            userIdCom: localStorage.getItem('user')
             
        }
    },
    mounted() {
        const userIdCom = localStorage.getItem('user');
        http.get(`/commentaires`)
            .then(response => {
                console.log("VEGETA")
            // console.log(response.data);
                this.commentaires = response.data;
            // JSON responses are automatically parsed.
            })
            .catch(e => {
                this.errors.push(e)
            })
        },
    methods: {
        addCom() {
            console.log("carapuce");
            const form = new FormData();
            console.log(content.value);
            form.append("content", content.value);
            console.log("axios is posting a com");
            http.post(`/commentaires`, content, {'Content-Type': 'multipart/form-data' })
            .then(response => {                
                console.log("commentaire posté");
            })
            .catch(e => {
                this.errors.push(e)
            })
        },        
         DeleteCommentaire(commentId) {
             console.log(commentId);
            console.log("axios del com");
            http.delete(`/commentaires/${commentId}`)
        } 
    }
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
        display: flex;
        flex-flow: wrap;  
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

    
</style>