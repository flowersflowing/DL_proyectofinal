<template>
  <div class="projects container">
    <!-- Agregar un v-if o v-show acá para que se deje de mostrar cuando hayan cards que mostrar -->
    <section class="perfil container my-5">
      <div class="container p-4">
        <h4 class="mb-4">Perfil</h4>
        <b-form @submit.prevent="crearUser" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Elige nombre de usuario" label-for="input-1">
              <b-form-input id="input-1" v-model="user.name" placeholder="Frida Kahlo" required></b-form-input>
          </b-form-group>
          <b-form-select class="mb-4" v-model="selected" :options="options"></b-form-select>

          <b-button type="submit" variant="warning">Crear</b-button>
          <b-button class="mx-2" type="reset" variant="secondary">Borrar</b-button>
        </b-form>        
      </div>
    </section>
    <section class="main-projects">
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
                  <b-card-text>{{project.name}}</b-card-text>
                  <b-card-text>{{project.place}}</b-card-text>
                  <b-card-text>{{project.description}}</b-card-text>
                </b-card>
              </b-col>           
            </b-row>
          </b-card-group>
      </b-container>        
    </section>
  </div>
</template>

<script>
export default {
  name: 'Proyectos',
  data() {
    return {
      user: {
        name: '',
        options: []
      },
      show: true
    }
  },
  methods: {
      crearUser() {
        if(this.user.name) {
          this.$store.dispatch('crearUsuario', this.user)
        } else {
          console.log('error');
        }
      },
      onReset(event) {
          event.preventDefault()
          // Reset our form values
          this.user.name = ''         
          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
              this.show = true
          })
      },
  }
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
.perfil {
  background-color: #ffffff;
  outline-style: solid;
  outline-color: #e9e8e8;
  outline-width: 1px;
}
</style>