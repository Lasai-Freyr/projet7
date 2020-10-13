<template>
  <div class="Login">
    <form id="appFormLog" class="form_user">
      <div class="form-group">
        <label for="address">Adresse mail : </label>
        <input type="email" id="address" class="form-control"  name="address" formControlName="address" v-model="address">
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


export default {
  name: "Login",
  data() {
    return {
      address: '',
      password: '',
      form: null
    }
  },
  methods: {
    login: function () {
     console.log("Compte 3");
      const form = {"address": this.address, "password": this.password };
      let address = this.address;
      let password = this.password;
      console.log( form);
      console.log( this.address);
      this.$store.dispatch('login', form)
      .then(resp => {
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