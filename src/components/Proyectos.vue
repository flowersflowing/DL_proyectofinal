<template>
  <div class="projects container">
    <!-- Agregar un v-if o v-show acá para que se deje de mostrar cuando hayan cards que mostrar -->
    <div class="text-center">
      <h2 class="my-5">Aún no tienes proyectos</h2>
      <img id="claudel" src="../assets/camilleclaudel.jpg" alt="claudel">      
    </div>
    <b-container class="my-5">
        <b-card-group >
          <b-row>
            <b-col cols="6" sm="6" md="4" lg="4" xl="4" v-for="(proj, index) in proj" :key="index">
              <b-card>
                <img :src="proj.imagen" alt="Imagen" img-top>
                <b-card-text>{{proj.name}}</b-card-text>
                <b-card-text>{{proj.place}}</b-card-text>
                <b-card-text>{{proj.description}}</b-card-text>
              </b-card>
            </b-col>           
          </b-row>
        </b-card-group>
    </b-container>  
  </div>
</template>

<script>
export default {
  name: 'Proyectos'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title {
  background-color: #f3de24d5;
  padding: 8em;
}
h2 {
  margin-bottom: 5em;
}
#claudel {
  height: 370px;
  border-radius: 50%;
}
</style>