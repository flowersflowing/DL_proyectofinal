<template>
  <div class="projects container">
    <!-- Agregar un v-if o v-show acá para que se deje de mostrar el formulario cuando muestre el avatar y que deje de mostrar a claudel cuando hayan cards que mostrar -->

    <!-- Sección de cards con proyectos -->
    <section class="main-projects">

      <!-- No hay proyectos -->
      <div class="text-center">
        <h2 class="my-5">Aún no tienes proyectos</h2>
        <img id="claudel" src="../assets/camilleclaudel.jpg" alt="claudel">      
      </div>
      <!-- Sí hay proyectos -->
      <b-container class="my-5">
          <!-- <b-card-group> -->
            <b-row>
              <b-col cols="6" sm="6" md="4" lg="4" xl="4" v-for="(project, index) in dataProyectos" :key="index">
                <b-card :title="project.title" :img-src="project.img" img-alt="Image" img-top tag="article" class="mb-2">
                  <b-card-text>
                    {{project.description}}
                  </b-card-text>
                  <b-button href="#" variant="warning">Editar</b-button>
                  <b-button class="ml-2" variant="secondary" @click="handleDelete(project.id)">Eliminar</b-button>
                </b-card>
              </b-col>           
            </b-row>
          <!-- </b-card-group> -->
      </b-container>        
    </section>
  </div>
</template>

<script>
export default {
  name: 'Proyectos',
  computed: {
    dataProyectos() {
      return this.$store.getters.mostrarProyectos;
    }
  },
  methods: {
      handleDelete(id) {
        this.$store.dispatch('eliminarProyecto', id);
        this.$router.push('/proyectos');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#claudel {
  height: 370px;
  border-radius: 50%;
}
</style>