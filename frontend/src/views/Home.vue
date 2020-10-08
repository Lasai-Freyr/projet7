<template>
  <div id="appForm" class="home">
    <h1> {{ msg }} </h1>  
    <div>
      <h2> Quelque chose à partager ?</h2>
      <form class="news-form" @submit="addPost()"> 
          <h2> Quelque chose à partager ?</h2>
        <p>
          <label for="title">Titre : </label>
          <input name="title" id="title" type="text" v-model="title" height="50px"> <br>
          <input classe="inputText" name="content" id="content" type="content" v-model="content">
        </p>
        <div id="appImg">
          <input class="button-post" type="file" accept="image/*" @change="onFileSelected($event)" name="image" id ="image">
          <div id="preview">
            <img v-if="url" :src="url" />
          </div>
        </div>
        <p> <input class="button-post" type="submit" value="Poster" > </p>
      </form>
    </div>
    <div>
      <Posts></Posts>
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
  width: 200px;
  max-height: 500px;
}

.news-form {
  border: 1px solid grey;
  border-radius: 20px;
  box-shadow: gray 4px 4px;
  width: 500px;
  padding: 50px;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  font-weight: bold;
  @media (min-width: 400px) and (max-width: 900px) {
    width: 90%;
  }
}

#title{
  width: 300px;
}

#content {
  margin-top: 10px;
  width: 90%;
  height: 120px;
}

.button-post {
  margin: 10px;
  border-radius: 12px;
  background-color: #288dcf;
  color: rgb(255, 255, 255);
  font-weight: bold;
}
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>
<script>
import http from '../http';
import Posts from '@/components/Posts-component.vue'

export default {
  name: "Home",
  components: {
        Posts
    },
  data() {
    return {
      msg :"Fil d'actualité ",
      title: null,
      content: null,
      image: null,
      form: null,
      selectedFile: null,
      url: null
    }
  },
  methods: {
    
    onFileSelected(event) {
      this.selectedFile  = event.target.files[0];
      const file =  event.target.files[0];
      this.url = URL.createObjectURL(file);  
    },
    addPost() {
      
        console.log("salamandre");
        var path = `${image.value}`;
        var filename = path.replace(/^.*\\/, "");
        //console.log(filename);
        const form = new FormData();
        form.append("title", title.value);
        form.append("content", content.value);
        form.append("imageFile", this.selectedFile );
        form.append("image", filename );
        http.post(`/posts`, form, {'Content-Type': 'multipart/form-data' })
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
