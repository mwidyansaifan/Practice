import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // login
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },

    // daftar
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
   
    {
      path: '/signup_2',
      name: 'signup_2',
      component: () => import('../components/SignUp/Step2.vue')
    },
    {
      path: '/signup_3',
      name: 'signup_3',
      component: () => import('../components/SignUp/Step3.vue')
    },
    {
      path: '/signup_4',
      name: 'signup_4',
      component: () => import('../components/SignUp/Step4.vue')
    },

    // lupa password
    {
      path: '/forgot_password',
      name: 'forgotpwd',
      component: () => import('../components/PasswordRecovery/Step1.vue')
    },
    {
      path: '/forgot_password2',
      name: 'forgotpwd2',
      component: () => import('../components/PasswordRecovery/Step2.vue')
    },

    //murid
    {
      path: '/murid_dashboard',
      name: 'dashboard',
      component: () => import('../components/Murid/Daftar.vue')
    },
  ]
})

export default router