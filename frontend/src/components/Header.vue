<template>
    <header>
        <div class="header">
            <div class="img">
                <router-link :to="{name: 'Home'}">
                    <img src="../assets/images/icon-left-font-monochrome-white2.png" alt="logo groupomania" id="logo">
                </router-link>
            </div>            
            <nav>        
                <span v-if="isLoggedIn"> 
                    <router-link :to="{name: 'Home'}">Fil d'actualité</router-link> 
                    <router-link :to="{name: 'Profil'}">Profil</router-link>
                    <a @click="logout">Se déconnecter</a>
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
        background:#288dcf;
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
        a{
        margin-right: 10px;
        margin-bottom: 5px;
        text-decoration: none;
        font-weight: bold;
        color: white;
        text-shadow: 2px 0 0 rgb(0, 0, 0), 2px 2px 0 rgb(0, 0, 0), 0 2px 0 rgb(0, 0, 0);
    } 
    }
    
</style>