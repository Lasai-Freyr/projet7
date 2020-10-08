import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'http://localhost:8080/api/auth/Login', data: user, method: 'POST' })
        .then(resp => {
          console.log("action loggin")
          const token = resp.data.token
          const user = resp.data.userId
          console.log("resp ", resp.data)
          console.log("resp ", user)
          localStorage.setItem('token', token)          
          localStorage.setItem('user', user) 
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(resp)          
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({commit}){
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    delete({commit}) {
      return new Promise((resolve) => {
        commit('logout')
        const jwt = require('jsonwebtoken');
        const token =  localStorage.getItem('token');
        const decodedToken = jwt.verify(token, '753215846392576321586015406875');
        const userId = decodedToken.userId;
        console.log("axios del account");
        axios.delete(`http://localhost:8080/api/auth/${userId}`);
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization']
        
        resolve()
      })
    }
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
})