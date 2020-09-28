import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Profil from '../components/Profil.vue'
import Login from '../components/auth/Login.vue'
import Signup from '../components/auth/Signup.vue'
import Posts from '../components/Posts-component.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      newsLine: Home,
      Posts: Posts
    }
  },

  {
    path: '/Login',
    name: 'Login',
    components: {
      default: Login,
      newsLine: Login
    }
  },
 
  {
    path: '/Signup',
    name: 'Signup',
    components: {
      default: Signup,
      newsLine: Signup
    }
  },
 
 
  {
    path:'/Profil',
    name:'Profil',
    components: {
      Profil: Profil
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
