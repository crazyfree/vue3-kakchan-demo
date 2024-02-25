import { createRouter, createWebHistory } from 'vue-router'
import UserTableView from '../views/UserTableView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Users',
      component: UserTableView
    }
  ]
})

export default router
