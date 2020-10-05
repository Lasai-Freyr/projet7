<template>
    <header>
        <div class="header">
            <div class="img">
                <img src="../assets/images/icon-left-font-monochrome-white2.png" alt="logo groupomania" id="logo">
            </div>            
            <nav>        
            <span v-if="isLoggedIn"> | 
                <router-link :to="{name: 'Home'}">Fil d'actualité</router-link> 
                <router-link :to="{name: 'Profil'}">Profil</router-link>
            <!--<router-link :to="{name: 'Signup'}">Créer un compte</router-link>
            <router-link :to="{name: 'Login'}">Se connecter</router-link> !-->
                <a @click="logout">Logout</a>
            </span>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/')
        })
      }
    },
}
</script>

<style lang="scss">
    .header {
        background: rgba(16, 123, 150, 0.267);
    }
    #logo {
        width: 200px;
        display: flex;
        justify-content: flex-start;
    } 
    nav {
        display: flex;
        justify-content: flex-end;
        padding-right: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    a{
        margin-right: 10px;
        margin-bottom: 5px;
    } 
</style>