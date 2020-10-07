<template>
<div id="app">
  <ul v-if="posts && posts.length">
    <li v-for="post of posts" v-bind:key="post.id">
      <router-link :to="{name: 'Post', params:post, id:post.id}">
        <p class="user">{{post.name}} :</p>
        <p class="p-title">{{post.title}}</p>
        <p> 
          {{ post.content }}  <br>
          <img :src="`/images/${post.image}`" :alt="post.image"> 
        </p>
      </router-link>
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios';
//import VueAxios from 'vue-axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    } 
  },  
  mounted(){    
    console.log("axios is getting");
    const token = localStorage.getItem('token');
    axios.get(`http://localhost:8080/api/posts`, {headers: {'authorization': token}})
    .then(response => {
      //  console.log(response.data);
        this.posts = response.data;
      // JSON responses are automatically parsed.
      //this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
   
</script>

<style lang="scss">
  ul {
    width: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;
    list-style: none;
    margin: auto;

    li {
      border: solid black 1px;
      width: 100%;
      margin: 10px;
      border-radius: 20px;
      box-shadow: gray 4px 4px;
      a {
        text-decoration: none;
        color: black;
      }
    }
  }
  img {
    width: 400px;
  }
  .user {
    text-align: left;
    max-width: 100px;
    margin-right: 10px;
    margin-left: 5px;
    margin-top: 5px;
  }
  .p-title {
    font-weight: bold;
    font-size: 20px;
  }
</style>