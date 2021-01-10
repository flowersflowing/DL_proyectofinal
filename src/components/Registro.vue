<template>
    <div class="projects container">
        <!-- Perfil de usuario -->    
        <section class="perfil container my-5">

            <!-- Formulario para crear avatar -->      
            <div class="container p-4">
                <h4 class="mb-4">Perfil</h4>

                <b-form @submit.prevent="crearUser" @reset="onReset" v-if="show">
                <!-- <b-form-group id="input-group-1" label="Elige nombre de usuario" label-for="input-1">
                    <b-form-input id="input-1" v-model="user.name" placeholder="Frida Kahlo" required></b-form-input>
                </b-form-group> -->
                <b-form-group id="input-group-1" label="Ingresa tu correo electrónico" label-for="input-1" description="We'll never share your email with anyone else.">
                    <b-form-input id="input-1" v-model="user.email" type="email" placeholder="usuario@gmail.com" required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Ingresa una clave" label-for="input-2">
                    <b-form-input id="input-2" v-model="user.password" type="password" placeholder="Ingresa tu nombre" required></b-form-input>
                </b-form-group>
<!-- 
                <b-form-select class="mt-2" v-model="selected" @change="buscarIdObjeto">
                    <option disabled value="">Selecciona un elemento para personalizar tu portada</option>
                    <option>Aztec</option>
                    <option>Egyptian</option>
                    <option>Mayan</option>
                </b-form-select>
                <p>Seleccionado: {{ selected }}</p> -->

                <b-button type="submit" variant="warning">Crear</b-button>
                <b-button class="mx-2" type="reset" variant="secondary">Borrar</b-button>
                </b-form>    
            </div>

            <!-- Avatar -->
            <!-- <b-row>
                <b-col cols="10" sm="8" md="4" lg="4" xl="3">
                <div class="avatar p-2">
                    <p>{{ user.name }}</p>
                    <b-avatar :src="user.img" size="6rem"></b-avatar>          
                </div>   
                </b-col>
            </b-row> -->
        </section>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'Proyectos',
  data() {
    return {
      user: {
        name: '',
        email: '',
        // password: '',
        // img: ''
      },
      selected: '',
      show: true
    }
  },
  methods: {
      crearUser() {
          if(this.user.email && this.user.password) {
              firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
              .then((resp) => {
                  this.user.userId = resp.user.uid;
                  this.$store.dispatch('crearUsuario', this.user);
                  this.$router.push('/login');
              }).catch((error) => {
                  if(error.code == 'auth/email-already-in-use') {
                      this.errors(error);
                  } else if(error.code == 'auth/invalid-email') {
                      this.errors(error)
                  } else if (error.code == 'auth/weak-password') {
                      this.errors(error);
                  }
              });
          } else {
              console.log('No funciona');
          }
      },
      errors(error) {
          this.$notify.error({
              title: 'Error',
              message: `${error.message}`
          });
      },
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

<style scoped>
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