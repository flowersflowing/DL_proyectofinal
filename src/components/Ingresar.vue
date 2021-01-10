<template>
  <div class="entrar container my-5">
    <section class="ingresar container p-5">
      <b-form @submit.prevent="login" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Correo electrónico" label-for="input-1" description="We'll never share your email with anyone else.">
          <b-form-input id="input-1" v-model="usuario.email" type="email" placeholder="usuario@gmail.com" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Clave" label-for="input-2">
          <b-form-input id="input-2" v-model="usuario.password" type="password" placeholder="Ingresa tu clave" required></b-form-input>
        </b-form-group>
        <div class="my-4">
          <b-button type="submit" variant="warning">Ingresar</b-button>
          <b-button class="mx-2" type="reset" variant="secondary">Borrar</b-button>        
        </div>
      </b-form>
    </section>
    <section class="btngoogle container my-5 p-5">
      <div class="text-center">
        <b-button size="lg" variant="info" @click="loginGoogle">Ingresar con Google</b-button>      
      </div>        
    </section>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'Ingresar',
  data() {
    return {
      usuario: {
        email: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    login() {
      if(this.usuario.email && this.usuario.password) {
        firebase.auth().signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
        .then(resp => {
          console.log(resp.user.email);
          this.$router.push('/proyectos');
        }).catch(error => {
          if(error.code == 'auth/wrong-password') {
            console.log('contraseña inválida');
          }else if(error.code == 'auth/invalid-email') {
            console.log('correo inválido');
          }else if(error.code == 'auth/user-disabled') {
            console.log('usuario no corresponde');
          }else {
            Error(error);
            console.log('usuario no encontrado');
            // this.$router.push('/');
          }
        })
      }else {
        console.log('error por situación imprevista en login por correo');
      }
    },
    loginGoogle() {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(resp => {
          console.log(resp);
          this.$router.push('/proyectos');
        }).catch(error => {
          console.log(error);
        })
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ingresar, .btngoogle {
  background-color: #ffffff;
  outline-style: solid;
  outline-color: #e9e8e8;
  outline-width: 1px;
}
</style>