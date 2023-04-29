import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Rueckblick from '../views/Rueckblick.vue'
import TSV from '../views/TSV.vue'
import Impressum from '../views/Impressum.vue'
import Datenschutz from '../views/Datenschutz.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rueckblick',
    name: 'rueckblick',
    component: Rueckblick
  },
  {
    path: '/tsv',
    name: 'tsv',
    component: TSV
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: Impressum
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: Datenschutz
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
