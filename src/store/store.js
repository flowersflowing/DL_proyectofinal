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
    }
  },
  mutations: {
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
            file1: el.data().file1
          })
        });
        commit('mutarProyectos', arreglo);
      });
    }
  }
})
