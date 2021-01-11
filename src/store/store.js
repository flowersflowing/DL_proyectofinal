import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../main';
import router from '../router/router';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    usuario: []
  },
  getters: {
    mostrarProyectos(state) {
      return state.projects;
    },
    mostrarUsuario(state) {
      return state.usuario;
    }  
  },
  mutations: {
    createProject(state, arreglo) {
      state.projects = arreglo;
    },
    createUser(state, arreglo) {
      state.usuario = arreglo;
    },
    updateProject(state, arreglo) {
      state.projects = arreglo;
    }
  },
  actions: {
    traerDataProyectos({commit}) {
      db.collection('projects').onSnapshot(resp => {
        let arreglo = [];
        resp.forEach(el => {
          arreglo.push({
            id: el.id,
            title: el.data().title,
            place: el.data().place,
            img: el.data().img,
            description: el.data().description
          });
        });
        commit('createProject', arreglo);
      });
    },
    traerDataUsuario({commit}) {
      db.collection('usuario').onSnapshot(resp => {
        let arreglo = [];
        resp.forEach(el => {
          arreglo.push({
            name: el.data().name,
          });
        });
        commit('createUser', arreglo);
      });
    },
    agregarProyectos(context, data) {
      db.collection('projects').add({
        title: data.title,
        place: data.place,
        img: data.img,
        description: data.description
      }).then(resp => {
        console.log(resp);
      })
    },
    crearUsuario(context, data) {
      db.collection('usuario').add({
        // name: data.name,
        // img: data.img
      }).then(resp => {
        console.log(resp);
        console.log(data);
        console.log(context);
      })
    },
    eliminarProyecto(context, id) {
      db.collection('projects').doc(id).delete().then(() => {
        console.log('eliminado');
      }).catch (error => {
        console.log(error);
      });
    },
    // Action de editar colección
    editandoProyecto(context, data) {
      db.collection('projects').doc(data.id).update({
        title: data.title,
        place: data.place,
        img: data.img,
        description: data.description,
        id: data.id
      }).then(() => {
        console.log('entrando');
        setTimeout(() => {
          router.replace('/proyectos');
        }, 1300);
      })
    }
  }
})
