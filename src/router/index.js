import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/EventListView.vue'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import EventDetailsView from '@/views/EventDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/events/:id',
      name: 'event-details',
      component: EventDetailsView,
      props: true
    }
  ]
})

export default router
