<template>
  <div class="Login">
    <form id="appFormLog" class="form_user">
      <div class="form-group">
        <label for="address">Adresse mail : </label>
        <input type="email" class="form-control"  name="address" formControlName="address" v-model="address">
      </div>
      <div class="form-group">
        <label for="password">Mot de passe : </label>
        <input type="password" name="password" v-model="password">
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
      address: null,
      password: null,
      form: null
    }
  },
  methods: {
    login: function () {
      let address = this.address;
      let password = this.password;
      this.$store.dispatch('login', { address, password })
      .then(resp => {   
        console.log("response", resp);
        const user = resp.data.userId;
        sessionStorage.setItem('user', user) ;
        console.log("response", user);
      })
      this.$router.push("Home"); 
    }        
  }
}
</script>

<style>
  .form-group {
    margin: 5px;
  }
</style>