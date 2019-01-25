import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddNote from './components/AddNote.vue';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import UserHome from './components/UserHome.vue';
import ViewNote from './components/ViewNote';
import EditNote from './components/EditNote.vue';

Vue.use(Router)

let router =  new Router({
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
      component: SignIn,
      meta: {
        guest: true,
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      meta: {
        guest: true,
      }
    },
    {
      path: '/addnote',
      name: 'addnote',
      component: AddNote,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/home',
      name: 'userhome',
      component: UserHome,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/view/:id',
      name: 'viewnote',
      component: ViewNote,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/edit/:id',
      name: 'editnote',
      component: EditNote,
      meta: {
        requiresAuth: true,
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  // console.log("To",to);
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(localStorage.getItem('token') == null){
      next({
        path: '/signin',
        params: {nextUrl: to.fullPath}
      })
    }else{
      next();
    }
  }else if(to.matched.some(record => record.meta.guest)){
    if(localStorage.getItem('token') == null){
      next()
    }else{
      next({name: 'userhome'})
    }
  }else{
    next();
  }

})

export default router;
