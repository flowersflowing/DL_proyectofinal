<template>
  <div class="profile">
    <Proyectos />
  </div>
</template>

<script>
// @ is an alias to /src
import Proyectos from '@/components/Proyectos.vue'

export default {
  name: 'Profile',
  components: {
    Proyectos
  }
}
</script>