import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login.vue'
import register from '../views/register.vue'
import ForgetThePassword from '../views/ForgetThePassword.vue'
import Password from '../views/Password.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login.vue'),
     
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue'),
    },
    {
      path: '/ForgetThePassword',
      name: 'ForgetThePassword',
      component: () => import('../views/ForgetThePassword.vue'),
    },
    {
      path: '/Password',
      name: 'Password',
      component: () => import('../views/Password.vue'),
    }
  ]
})
