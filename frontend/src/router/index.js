import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Profil from '../views/Profil.vue'
import Post from '../views/Post.vue'
import AdminPage from '../views/AdminPage.vue'
import Auth from '../views/Auth.vue'
import Login from '../components/auth/Login.vue'
import Signup from '../components/auth/Signup.vue'
import PostsCom from '../components/Posts-component.vue'
import Commentaires from '../components/Commentaires-components.vue'
import store from '../store.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    components: {
      Auth: Auth
    }
  },

  {
    path: '/Home',
    name: 'Home',
    components: {
      default: Home,
      newsLine: Home,
      PostsCom: PostsCom
    },
  },
  { 
    path: '/admin', 
    component: AdminPage, 
    meta: {
      requiresAuth: true
    }
  },
  {
    path: `/posts/:id`,
    name: 'Post',
    components: {
      Post: Post,
      commentaires: Commentaires
    },
    meta: {
      requiresAuth: true
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
    },
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

export default router
