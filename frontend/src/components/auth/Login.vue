<template>
  <div class="Login">
    <form id="appFormLog" class="form_user">
      <div class="form-group">
        <label for="address">Adresse mail : </label>
        <input type="email" id="addressLog" class="form-control"  name="addressLog" v-model="addressLog">
      </div>
      <div class="form-group">
        <label for="password">Mot de passe : </label>
        <input type="password" id="passwordLog" name="passwordLog" v-model="passwordLog">
      </div>
      <input class="button-signup" type="submit" value="Se connecter" @click.prevent="login()">
    </form>
  </div>    
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>

<script>


export default {
  name: "Login",
  data() {
    return {
      addressLog: '',
      passwordLog: '',
      form: null
    }
  },
  methods: {
    login: function () {
      const form = {"address": this.addressLog, "password": this.passwordLog };
      let address = this.addressLog;
      let password = this.passwordLog;
      console.log( form);
      console.log( this.addressLog);
      this.$store.dispatch('login', form)
      .then(resp => {
        if (this.$store.getters.isLoggedIn) {
          this.$router.push("Home");
        }
        console.log("ok");
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