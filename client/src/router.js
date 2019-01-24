import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddNote from './components/AddNote.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      
    },
    {
      path: '/addnote',
      name: 'addnote',
      component: AddNote,
    }
  ]
})
