<template>
  <div id="appForm" class="home">
    <h1> {{ msg }} </h1>  
    <div>
      <form class="news-form" @submit="checkForm"> 
        <p>
          <label for="name">Quelque chose à dire ? </label> <br>
          <input name="title" id="title" type="text" v-model="text" height="50px"> <br>
          <input classe="inputText" name="content" id="content" type="text" v-model="text" height="50px">
        </p>
        <div id="appImg">
          <input type="file" accept="image/*" @change="onFileChange" name="image" id ="image"/>
          <div id="preview">
            <img v-if="url" :src="url" />
          </div>
        </div>
        <p> <input type="submit" value="Poster"> </p>
      </form>
    </div>
  </div>
</template>


<style>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}

#appForm {
  border: 1px solid grey;
  width: 50%;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
}

.inputText {
  size: 140px;
  height: 50px;
}
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>
<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      msg :"Fil d'actualité ",
      text: null,
      title: null,
      content: null,
      image: null
    }
  },
  methods: {
    checkForm() {
      if (this.title && (this.content || this.image)) {
        return true;
      }
      this.errors = [];

      if (!this.title) {
        this.errors.push('titre requis.');
      }
      else {
        this.errors.push('Aucun contenu à poster');
      } 
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    }
    },
  addPost() {
    console.log("axios is posting");
    axios.post(`http://localhost:8080/api/posts`, {
      title: title,
      content: content,
      image: image,
      userId: 1
    })
    .then(response => {
        console.log(response.data);
      //  this.posts = response.data;
      // JSON responses are automatically parsed.
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
