<template>
  <div id="app">
    <Header/>
    <div>
      <router-view name="newsLine"></router-view>
      <router-view name="Profil"></router-view>
      <router-view name="Posts"></router-view>
      <router-view name="Post"></router-view>
      <router-view name="Signup"></router-view>
      <router-view name="Login"></router-view>
       <router-view name="Auth"></router-view>
    </div>
  </div>

</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>
<script>
  import Header from '@/components/Header'

  export default {
    name: "app",
    components: {
      Header
    }
  }
  </script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }  
}

body {
  margin: 0px;
}
</style>
