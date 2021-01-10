import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../main';


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
    cambiarProyectos(state, arreglo) {
      state.projects = arreglo;
    },
    cambiarUsuario(state, arreglo) {
      state.usuario = arreglo;
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
        commit('cambiarProyectos', arreglo);
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
        commit('cambiarUsuario', arreglo);
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
        name: data.name,
        email: data.email,
        password: data.password,
        img: data.img
      }).then(resp => {
        console.log(resp);
      })
    },
    eliminarProyecto(context, id) {
      db.collection('projects').doc(id).delete().then(() => {
        console.log('eliminado');
      }).catch (error => {
        console.log(error);
      });
    }
  }
})
