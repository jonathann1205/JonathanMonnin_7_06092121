import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'Connexion',
    }
  },
  {
    path: '/Signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue'),
    meta:{
      title:'Inscription',
    }
  },
  {
    path: '/Mur',
    name: 'Mur',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mur.vue'),
    meta:{
      title:'Groupomania',
    }
  },
  {
    path: '/Post',
    name: 'Post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue'),
    meta:{
      title:'Groupomania',
    }
  },
  {
    path: '/Profil',
    name: 'Profil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profil.vue'),
    meta:{
      title:'Groupomania',
    }
  },
 
  




]

const router = new VueRouter({
  routes
})

router.afterEach((to) =>{
  document.title = to.meta.title;
})

export default router
