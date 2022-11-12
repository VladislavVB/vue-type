import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jsob from '../views/Jobs.vue'
import ToDo from '../views/ToDo.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/jobs', name: 'Jsob', component: Jsob },
  { path: '/todo', name: 'ToDo', component: ToDo },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
