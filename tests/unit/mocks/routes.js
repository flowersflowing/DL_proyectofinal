import Portada from '@/views/Portada.vue'
import Proyectos from '@/views/Proyectos.vue'

export default {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/portada',
      name: 'Portada',
      component: Portada
    },
    {
      path: '/proyectos',
      name: 'Proyectos',
      component: Proyectos
    }
  ]
}