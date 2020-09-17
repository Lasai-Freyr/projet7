<template>
  <div id="app">
    <div id="nav">
      <router-link to="./index.html">
        <img src="../public/images/icon-left-font-monochrome-white.png" alt="logo groupomania" id="logo">
      </router-link>
      <router-link to="./Home">Home</router-link> |
      <router-link to="/Profil">Profil</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
  background: #2a3ac5;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  #logo {
    width: 150px;
  }
}


</style>
