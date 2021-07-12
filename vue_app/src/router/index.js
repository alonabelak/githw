import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: {
      layout:'default'
    }

  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/views/Contacts.vue'),
    meta: {
      layout:'default'
    }

  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/blog/list.vue'),
    meta: {
      layout:'default'
    }

  },
  {
    path:'/blog/:id',
    name: 'BlogDetail',
    component:() => import ('@/views/blog/detail.vue'),
    meta: {
      layout:'default'
    }
  },
  {
    path:'/login',
    name: 'Login',
    component:() =>import('@/views/login.vue'),
    mets: {
      layout: 'auth'
    }
  }
]

const router = new VueRouter({
  base:'/',
  routes
})

router.beforeResolve((to, from, next) => {
    if(to.path!=="/login"){
      if (localStorage.getItem("my_user")===null) {
        next('/login');
      }else {
        next();
      }
    }else {
      if (localStorage.getItem("my_user")!==null){
        next('/');
      }else {
        next();
      }
      
    }
})
router.afterEach(() => {
  NProgress.done()
})

export default router
