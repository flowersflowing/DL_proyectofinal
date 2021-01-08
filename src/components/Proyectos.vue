<template>
  <div class="projects container">
    <!-- Agregar un v-if o v-show acá para que se deje de mostrar el formulario cuando muestre el avatar y que deje de mostrar a claudel cuando hayan cards que mostrar -->

    <!-- Perfil de usuario -->    
    <section class="perfil container my-5">

      <!-- Formulario para crear avatar -->      
      <div class="container p-4" v-if="user.name === '' || user.img === ''">
        <h4 class="mb-4">Perfil</h4>

        <b-form @submit.prevent="crearUser" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Elige nombre de usuario" label-for="input-1">
              <b-form-input id="input-1" v-model="user.name" placeholder="Frida Kahlo" required></b-form-input>
          </b-form-group>

          <b-form-select v-model="selected" @change="buscarIdObjeto">
            <option disabled value="">Selecciona un elemento</option>
            <option>Aztec</option>
            <option>Egyptian</option>
            <option>Mayan</option>
          </b-form-select>
          <p>Seleccionado: {{ selected }}</p>

          <b-button type="submit" variant="warning">Crear</b-button>
          <b-button class="mx-2" type="reset" variant="secondary">Borrar</b-button>
        </b-form>    
      </div>

      <!-- Avatar -->
      <b-row v-else class="p-3">
        <b-col cols="10" sm="8" md="4" lg="4" xl="3">
          <div class="avatar p-2">
            <p>{{ user.name }}</p>
            <b-avatar :src="user.img" size="6rem"></b-avatar>          
          </div>   
        </b-col>
      </b-row>       
    </section>

    <!-- Sección de cards con proyectos -->
    <section class="main-projects">

      <!-- No hay proyectos -->
      <div class="text-center">
        <h2 class="my-5">Aún no tienes proyectos</h2>
        <img id="claudel" src="../assets/camilleclaudel.jpg" alt="claudel">      
      </div>

      <!-- Sí hay proyectos -->
      <b-container class="my-5">
          <b-card-group >
            <b-row>
              <b-col cols="6" sm="6" md="4" lg="4" xl="4" v-for="(proj, index) in proj" :key="index">
                <b-card>
                  <img :src="proj.img" alt="Imagen" img-top>
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
        img: ''
      },
      selected: '',
      show: true
    }
  },
  methods: {
      buscarIdObjeto(value) {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${value}&showOnly=openaccess`)
          .then(response => response.json())
          .then(data => this.getRandomObject(data));
      },
      getRandomObject(obj) {
        let objArray = obj.objectIDs;
        console.log(objArray);
        const randomL = () => Math.floor(Math.random() * objArray.length - 1) + 1;
        this.getProfilePicture(objArray[randomL()]);
      },
      getProfilePicture(randomObj) {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomObj}`)
          .then(response => response.json())
          .then(data => this.user.img = data.primaryImage);
      },
      crearUser() {
        if(this.user.name && this.user.img) {
          this.$store.dispatch('crearUsuario', this.user)
        } else {
          console.log('error');
        }
      },
      onReset(event) {
          event.preventDefault()
          // Reset our form values
          this.user.name = '',
          this.user.img = ''       
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
.perfil, .avatar {
  background-color: #ffffff;
  outline-style: solid;
  outline-color: #e9e8e8;
  outline-width: 1px;
}
.avatar {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>