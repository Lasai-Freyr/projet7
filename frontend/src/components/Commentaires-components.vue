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
            <button @click="showComments()" >Voir les commentaires</button>
        </div>
        <div>
            <ul v-if="commentaires && commentaires.length">                
                <li v-for="commentaire of commentaires" v-bind:key="commentaire.id">
                    <div class="comment-box">
                        <!--<button @click="DeleteCommentaire(commentaire.id)">X</button> !-->
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
import axios from 'axios';

export default {
    name: "commentaires",
    data(){
        return{
            commentaires: {},
            content: null,
            form: null
             
        }
    },
    
    methods: {
        addCom() {
            console.log("carapuce");
            const form = new FormData();
            console.log(content.value);
            form.append("content", content.value);
            console.log("axios is posting a com");
            axios.post(`http://localhost:8080/api/commentaires`, content, {'Content-Type': 'multipart/form-data' })
            .then(response => {
                //axios.post(`./frontend/src/assets/images`, this.SelectedFile)
                //  console.log(response.data);
                // JSON responses are automatically parsed.
            })
            .catch(e => {
                this.errors.push(e)
            })            
        },
        showComments() {
        const token = localStorage.getItem('token');
        axios.get(`http://localhost:8080/api/commentaires`, {headers: {'authorization': token}})
            .then(response => {
                console.log("VEGETA")
               // console.log(response.data);
                this.commentaires = response.data;
            // JSON responses are automatically parsed.
            })    
    },
         DeleteCommentaire(commentId) {
             console.log(commentId);
            console.log("axios del com");
            axios.delete(`http://localhost:8080/api/commentaires/${commentId}`, {headers: {'authorization': token}})
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