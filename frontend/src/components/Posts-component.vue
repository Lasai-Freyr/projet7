<template>
<div id="app">
  <ul v-if="posts && posts.length">
    <li v-for="post of posts" v-bind:key="post.id">
      <p><strong>{{post.title}}</strong></p>
      <p> 
        {{ post.content }} <br>
        <img :src="postImage(post.image)"> 
      </p>
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios';
//import VueAxios from 'vue-axios';

export default {
    el:"#app",
  data() {
    return {
      posts: [],
      errors: []
    } 
  },
  methods: {
    postImage() {
    return './assets/images/'+this.image;
    }
  },
  mounted(){    
    console.log("axios is getting");
    axios.get(`http://localhost:8080/api/posts`)
    .then(response => {
        console.log(response.data);
        this.posts = response.data;
      // JSON responses are automatically parsed.
      //this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
  
    //getOnePost() {
    //  axios.get(`http://localhost:8080/api/posts/:id`)
    //  .then(response => {
    //      console.log(response.data);
    //      this.post = response.data;
    //    // JSON responses are automatically parsed.
    //    //this.posts = response.data
    //  })
    //}
  //}
}
    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
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
      margin: 2px;
    }
  }
  img {
    width: 100px;
  }
</style>