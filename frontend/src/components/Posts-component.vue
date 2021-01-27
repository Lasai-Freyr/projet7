<template>
<div id="app">
  <ul v-if="posts && posts.length" class="ul-posts">
    <li v-for="post of posts" v-bind:key="post.id" class="li-posts">
      <router-link :to="{name: 'Post', params:post, id:post.id}">
        <p class="p-title">{{post.title}}</p>
        <p> 
          {{ post.content }} </p>
          <div v-if="post.image">
            <img :src="`/images/${post.image}`" :alt="post.image">
          </div>
          <div>
             <i class="likes fas fa-thumbs-up"></i>
            <span >{{ post.likes }}</span>
            <i class="dislikes fas fa-thumbs-down"  ></i>
            <span>{{ post.dislikes }}</span>
          </div>
         <p> posté par <strong> {{post.name}} </strong> le {{ post.datePost}}  </p>
      </router-link>
    </li>
  </ul>
</div>
</template>

<script>
import http from '../http';
//import VueAxios from 'vue-axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    } 
  },  
  mounted(){   
    http.get(`/posts`)
    .then(response => {
        this.posts = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
   
</script>

<style lang="scss">
  .likes {
    color: green;
    margin-right: 5px;
   }
   .dislikes {
     color:  #ce0000;
     margin-left: 15px;
     margin-right: 5px;
   }
  .ul-posts {
    width: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;
    list-style: none;
    margin: auto;

    .li-posts {
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