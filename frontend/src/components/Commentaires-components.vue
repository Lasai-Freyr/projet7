<template>
     <div >
        <div>
            <form class="com-form" @submit="addCom()"> 
                <p>
                <label for="name">Votre commentaire : </label> 
                <input classe="inputText" name="content" id="content" type="content" v-model="content" height="50px">
                </p>
                <p> <input type="submit" value="Poster" @submit="addCom()"> </p>
            </form>
        </div>
        <div>
            <ul v-if="commentaires && commentaires.length">                
                <li v-for="commentaire of commentaires" v-bind:key="commentaire.id">
                     <button @click="DeleteCommentaire(commentaire.id)">X</button>
                    <p class="user">{{commentaire.name}} :</p>
                    <p> {{ commentaire.content }}</p>
                    <p> posté le {{ commentaire.dateCommentaire}}. </p>
                </li>
            </ul>
        </div>
</div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>
<script>
import axios from 'axios';

export default {
    el: "#app",
    name: "commentaires",
    data(){
        return{
            commentaires: [],
            content: null,
            form: null
             
        }
    },
    beforeMount() {
     axios.get(`http://localhost:8080/api/commentaires`)
            .then(response => {
                console.log("VEGETA")
               // console.log(response.data);
                this.commentaires = response.data;
            // JSON responses are automatically parsed.
            })    
    },
    methods: {
        addCom() {
            console.log("carapuce");
            const form = new FormData();
            console.log(content.value);
            form.append("content", content.value);
            console.log("axios is posting a com");
            console.log(form);
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
         DeleteCommentaire() {
            console.log("axios del com");
            axios.delete(`http://localhost:8080/api/commentaires/${commentaire.id}`)
    } 
    }
}
</script>

<style>

</style>