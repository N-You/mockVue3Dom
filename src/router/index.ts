import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Layout = () => import('~/views/Layout/index.vue')
const Login = () => import('~/views/Login/index.vue')
const Fpassword = () => import('~/views/Fpassword/index.vue')
const Rpassword = () => import('~/views/Rpassword/index.vue')
const PersonInfo = () => import('~/views/PersonInfo/index.vue')
const Register = () => import('~/views/Register/index.vue')

const Home = () => import('~/views/Home/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    children: [
      { path: '/home', name: 'Home', component: Home },
      {
        path: '/layout',
        component: Layout,
        redirect: '/login',
        children: [
          { path: '/login', name: 'Login', component: Login },
          { path: '/fpassword', name: 'Fpassword', component: Fpassword },
          { path: '/rpassword', name: 'Rpassword', component: Rpassword },
          { path: '/personinfo', name: 'PersonInfo', component: PersonInfo },
          { path: '/register', name: 'Register', component: Register },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
