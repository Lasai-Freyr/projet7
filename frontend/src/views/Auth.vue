<template>
    <div class="Auth">
        <div>
            <button v-on:click="log = false"> Créer un compte</button>
            <button v-on:click="log = true">Se connecter</button>
        </div>
         <div v-show="!log">
             <Signup></Signup>
        </div>
        <div v-show="log">
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