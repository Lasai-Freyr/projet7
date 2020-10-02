<template>
  <div id="appForm" class="home">
    <h1> {{ msg }} </h1>  
    <div>
      <form class="news-form" @submit="addPost()"> 
        <p>
          <label for="name">Quelque chose à dire ? </label> <br>
          <input name="title" id="title" type="text" v-model="title" height="50px"> <br>
          <input classe="inputText" name="content" id="content" type="content" v-model="content" height="50px">
        </p>
        <div id="appImg">
          <input type="file" accept="image/*" @change="onFileSelected" name="image" id ="image">
          <div id="preview">
            <img v-if="url" :src="url" />
          </div>
        </div>
        <p> <input type="submit" value="Poster" @submit="addPost()"> </p>
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
  name: "Home",
  data() {
    return {
      msg :"Fil d'actualité ",
      title: null,
      content: null,
      image: null,
      form: null,
      SelectedFile: null
    }
  },
  methods: {
    
    onFileSelected(e) {
      this.SelectedFile = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    addPost() {
        console.log("salamandre");
        var path = `C:\\fakepath\\${image.value}`;
        var filename = path.replace(/^.*\\/, "");
        console.log(filename);
        const form = new FormData();
        form.append("title", title.value);
        form.append("content", content.value);
        form.append("imageFile", this.SelectedFile);
        form.append("image", filename);
        console.log("axios is posting");
        console.log(form);
        axios.post(`http://localhost:8080/api/posts`, form, {'Content-Type': 'multipart/form-data' })
        .then(response => {
          //axios.post(`./frontend/src/assets/images`, this.SelectedFile)
          //  console.log(response.data);
          // JSON responses are automatically parsed.
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
