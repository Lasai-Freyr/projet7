<template>
  <div id="appForm" class="home">
    <h1> {{ msg }} </h1>  
    <div>
      <form class="news-form" @submit.prevent="onSubmit"> 
        <p>
          <label for="name">Quelque chose à dire ? </label> <br>
          <input type="text" v-model="text">
        </p>
        <div id="appImg">
          <input type="file" accept="image/*" @change="onFileChange" />
          <div id="preview">
            <img v-if="url" :src="url" />
          </div>
        </div>
        <p> <input type="submit" value="Submit"> </p>
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
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>
<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      msg :"Fil d'actualité ",
      text: null,
      url: null
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    }
  }
}
</script>
