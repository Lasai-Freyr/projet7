<template>
  <div id="app" class="Login">
    <form id="appForm" class="form_user"  @submit="findUser()">
      <div class="form-group">
        <label for="address">Adresse mail : </label>
        <input type="email" class="form-control" id="address" name="address" formControlName="address" v-model="address">
      </div>
      <div class="form-group">
        <label for="password">Mot de passe : </label>
        <input type="password" id="password" name="password" v-model="password">
      </div>
      <input type="submit" value="Se connecter" @click="findUser()">
    </form>
  </div>    
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>

<script>
import axios from 'axios';

export default {
  name: "Login",
  data() {
    return {
      address: null,
      password: null,
      form: null
    }
  },
  methods: {
    findUser() {
      console.log(this.address);
      console.log("addUser");
      const body = {"address": this.address, "password": this.password};
      console.log(body);
      axios.post(`http://localhost:8080/api/auth/Login`, body, {'Content-Type': 'multipart/form-data' })
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

<style>
  .form-group {
    margin: 5px;
  }
</style>