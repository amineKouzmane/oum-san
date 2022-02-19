import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ventes',
    name: 'Ventes',
    component: () => import('../views/Ventes.vue')
  },
  {
    path: '/Lettrage',
    name: 'Lettrage',
    component: () => import('../views/Lettrage.vue')
  },
  {
    path: '/NouvelleCommande',
    name: 'NouvelleCommande',
    component: () => import('../views/NouvelleCommande.vue')
  },
  {
    path: '/ModifierCommande',
    name: 'ModifierCommande',
    component: () => import('../views/ModifierCommande.vue')
  },
  {
    path: '/AfficherCommande',
    name: 'AfficherCommande',
    component: () => import('../views/AfficherCommande.vue')
  },
  {
    path: '/Clients',
    name: 'Clients',
    component: () => import('../views/Clients.vue')
  },
  {
    path: '/NouveauClient',
    name: 'NouveauClient',
    component: () => import('../views/NouveauClient.vue')
  },
  {
    path: '/ModifierClient',
    name: 'ModifierClient',
    component: () => import('../views/ModifierClient.vue')
  },
  {
    path: '/Production',
    name: 'Production',
    component: () => import('../views/Production.vue')
  },
  {
    path: '/NouveauBatch',
    name: 'NouveauBatch',
    component: () => import('../views/NouveauBatch.vue')
  },
  {
    path: '/ModifierBatch',
    name: 'ModifierBatch',
    component: () => import('../views/ModifierBatch.vue')
  },
  {
    path: '/Stock',
    name: 'Stock',
    component: () => import('../views/Stock.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router