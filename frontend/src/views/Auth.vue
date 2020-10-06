<template>
    <div class="Auth py-1">
        <div v-show="log" class="signup">
             <button v-on:click="log = false">Se connecter à un compte</button>
             <Signup></Signup>
        </div>
        <div v-show="!log" class="login">
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
    button, .button-signup, .button-login {
        margin: 10px;
        border-radius: 12px;
        background-color: #288dcf;
        color: rgb(255, 255, 255);
        font-weight: bold;
    }

    .Auth {
        border: 1px solid black;
        margin: auto;
        margin-top: 30px;
        width: 500px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-items: center;
        border-radius: 20px;
        box-shadow: gray 4px 4px;

        .signup, .login {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
            .form_user {
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: space-around;
            }
        }
    }
    label {
        margin-left: 30px;
        margin-right: 5px;
    }
    
</style>