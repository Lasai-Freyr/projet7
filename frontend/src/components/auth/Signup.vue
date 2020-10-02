<template>
  <div id="app" class="Signup">
    <form id="appForm" class="form_user"  @submit="addUser()">
          <div class="form-group">
        <label for="name">Nom :</label>
        <input type="text" id="name" v-model="name" name="name" class="form-control">
      </div>
      <div class="form-group">
        <label for="address">Adresse mail :</label>
        <input type="email" class="form-control" id="address" name="address" formControlName="address" v-model="address">
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" name="password" v-model="password">
      </div>
      <input type="submit" value="Créer son compte" @click="addUser()">
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
      console.log(this.name);
      console.log("addUser");
      const body = {"name": this.name, "address": address.value, "password": password.value};
      console.log(body);
      axios.post(`http://localhost:8080/api/auth/signup`, body, {'Content-Type': 'multipart/form-data' })
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

</style>