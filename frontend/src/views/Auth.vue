<template>
    <div class="Auth">
        <div v-show="log">
             <button v-on:click="log = false">Se connecter à un compte</button>
             <Signup></Signup>
        </div>
        <div v-show="!log">
            <button v-on:click="log = true"> Créer un compte</button>
             <Login></Login>
        </div>        
    </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>

<script>
import Signup from '@/components/auth/Signup.vue'
import Login from '@/components/auth/Login.vue'

export default {
     name:"Auth",
        components: {
        Signup,
        Login
    },
    data() {
        return {
           
            log: false,            
            error: null
        
        } 
    },
}
</script>

<style lang="scss">
    button {
        margin: 5px;
    }
</style>