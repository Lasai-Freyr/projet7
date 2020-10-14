<template>
  <div class="Signup">
    <form id="appFormSign" class="form_user" >
      <div class="form-group">
        <label for="name">Nom : </label>
        <input type="text" id="name" v-model="name" name="name" class="form-control">
      </div>
      <div class="form-group">
        <label for="address">Adresse mail : </label>
        <input type="email" class="form-control" id="address" name="address" formControlName="address" v-model="address">
      </div>
      <div class="form-group">
        <label for="password">Mot de passe : </label>
        <input type="password" id="password" name="password" v-model="password">
      </div>
      <input class="button-signup" type="submit" value="Créer son compte" @click.prevent="addUser()">
    </form>
  </div>    
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>

<script>
import axios from 'axios';

export default {
  name: "Signup",
  data() {
    return {
      name: null,
      address: null,
      password: null,
      form: null
    }
  },
  methods: {
    addUser() {
      const body = {"name": this.name, "address": this.address, "password": this.password};
      axios.post(`http://localhost:8080/api/auth/signup`, body, {'Content-Type': 'multipart/form-data' })
      .then(response => {
        window.alert("Merci d'avoir créé votre compte.");
      })
      .catch(e => {
        this.errors.push(e)
      })
      
      this.$router.go();
    }
  }
}
</script>

<style>
  .form-group {
    display: flex;
   justify-content: space-around;
  }
</style>