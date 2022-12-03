import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Register from '../views/auth/Register.vue'
import Login from '../views/auth/Login.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jsob from '../views/Jobs.vue'
import ToDo from '../views/ToDo.vue'
import WeatherIndex from '../views/wather/Index.vue'
import WeatherCity from '../views/wather/WeatherCity.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      layout: 'AppDefaultLayout',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      layout: 'AppDefaultLayout',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      layout: 'AppDefaultLayout',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      layout: 'AppDefaultLayout',
    },
  },
  {
    path: '/jobs',
    name: 'Jsob',
    component: Jsob,
    meta: {
      layout: 'AppDefaultLayout',
    },
  },
  {
    path: '/todo',
    name: 'ToDo',
    component: ToDo,
    meta: {
      layout: 'AppAuthLayout',
      requiresAuth: true,
    },
  },
  {
    path: '/weather',
    name: 'Weather',
    component: WeatherIndex,
    meta: {
      layout: 'AppWeatherLayuot',
      requiresAuth: false,
    },
  },
  {
    path: '/weather/:region/:city',
    name: 'WeatherCity',
    component: WeatherCity,
    meta: {
      layout: 'AppWeatherLayuot',
      requiresAuth: false,
    },
  },
]



const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem('accessToken')) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
