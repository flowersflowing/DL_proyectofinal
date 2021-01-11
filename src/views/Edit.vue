<template>
  <div class="edit">
    <Editarproyecto />
  </div>
</template>

<script>
// @ is an alias to /src
import Editarproyecto from '@/components/Editarproyecto.vue';

export default {
  name: 'Edit',
  components: {
    Editarproyecto
  }
}
</script>