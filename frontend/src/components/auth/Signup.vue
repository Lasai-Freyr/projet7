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
    <div class="instructions">
      <h3 class=""> Le mot de passe doit contenir : </h3>
      <ul class="li-constraints">
        <li> à minima de 6 caractères. </li>
        <li> un caractère en majuscule. </li>
        <li> un caractère en minuscule. </li>
        <li> un chiffre. </li>
      </ul>
    </div>
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

  .instructions {
    display: inline-block;
    flex-direction: row;
    border: 1px solid black;
    margin: auto;
    margin-top: 30px;
    padding: 10px;
    align-items: center;
    justify-items: center;
    border-radius: 20px;
    box-shadow: gray 4px 4px;
  }

  .li-constraints {
    border: none;
    text-align: left;
  }
</style>