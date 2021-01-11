<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">ELABORA</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item class="links"><router-link to="/">Portada</router-link></b-nav-item>
            <b-nav-item class="links"><router-link to="/proyectos">Mis proyectos</router-link></b-nav-item>
            <b-nav-item class="links"><router-link to="/nuevoproyecto">Nuevo proyecto</router-link></b-nav-item>
            <b-nav-item class="links"><router-link to="/editarproyecto">Editar proyecto</router-link></b-nav-item>
            <b-nav-item class="links"><router-link to="/registro">Regístrate</router-link></b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form> -->

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item><router-link to="/login">Login</router-link></b-dropdown-item>
              <b-dropdown-item @click="logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('traerDataProyectos'),
    this.$store.dispatch('traerDataUsuario')
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/login');
      }).catch((error) => {
        console.error(error);
      });
    }
  },
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  // background-color: #fcf3df !important;
  background-color: #f4fdf7 !important;
}
.router-link {
  text-decoration-color: none;
  color: #eaf5f8;
}
.router-link-exact-active{
  color: #e2c105;
  font-weight: medium;
}
</style>