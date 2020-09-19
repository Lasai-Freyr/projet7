<template>
    <header>
        <div class="header">
            <div class="img">
                <img src="../assets/images/icon-left-font-monochrome-white2.png" alt="logo groupomania" id="logo">
            </div>            
            <nav>        
            <router-link :to="{name: 'Home'}">Home</router-link> |
            <router-link :to="{name: 'Profil'}">Profil</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {}
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
        margin-right: 10px;
        margin-bottom: 10px;
    }  
</style>