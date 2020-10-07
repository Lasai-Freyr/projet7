<template>
  <div id="app" class="Login">
    <form id="appForm" class="form_user">
      <div class="form-group">
        <label for="address">Adresse mail : </label>
        <input type="email" class="form-control" id="address" name="address" formControlName="address" v-model="address">
      </div>
      <div class="form-group">
        <label for="password">Mot de passe : </label>
        <input type="password" id="password" name="password" v-model="password">
      </div>
      <input class="button-signup" type="submit" value="Se connecter" @click="login()">
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
    login: function () {
      console.log("login is progress");
      let address = this.address;
      let password = this.password;
      console.log("login is progress 2");
      this.$store.dispatch('login', { address, password });
      console.log("router to home");
      //const user = this.address;
      //localStorage.setItem('user', user)
      //    console.log("user", user)
      //this.$router.push('/posts');
    },
    
  }
}
</script>

<style>
  .form-group {
    margin: 5px;
  }
</style>