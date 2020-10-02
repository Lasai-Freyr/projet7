import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Profil from '../views/Profil.vue'
import Post from '../views/Post.vue'
import Login from '../components/auth/Login.vue'
import Signup from '../components/auth/Signup.vue'
import Posts from '../components/Posts-component.vue'
import Commentaires from '../components/Commentaires-components.vue'

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
    path: `/posts/:id`,
    name: 'Post',
    components: {
      Post: Post,
      commentaires: Commentaires
    }
  },

  {
    path: '/Login',
    name: 'Login',
    components: {
      Login: Login,
    }
  },
 
  {
    path: '/signup',
    name: 'Signup',
    components: {
      Signup: Signup,
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
