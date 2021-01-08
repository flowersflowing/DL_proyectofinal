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
    mutarProyectos(state, arreglo) {
      state.projects = arreglo;
    }
  },
  actions: {
    agregarProyecto(context, data) {
      db.collection('projects').add({
        name: data.name,
        place: data.place,
        description: data.description
      }).then(resp => {
        console.log(resp);
      })
    },
    crearUsuario(context, data) {
      db.collection('usuario').add({
        name: data.name
      }).then(resp => {
        console.log(resp);
      })
    },
    traerProyecto({commit}) {
      db.collection('projects').onSnapshot(resp => {
        let arreglo = [];
        resp.forEach(el => {
          arreglo.push({
            id: el.id,
            name: el.data().name,
            place: el.data().place,
            description: el.data().description,
            file1: el.data().img
          })
        });
        commit('mutarProyectos', arreglo);
      });
    },
    traerUsuario({commit}) {
      db.collection('usuario').onSnapshot(resp => {
        let arreglo = [];
        resp(el => {
          arreglo.push({
            name: el.data().name,
          })
        });
        commit('mutarProyectos', arreglo);
      });
    }
  }
})
