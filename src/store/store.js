import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: []
  },
  getters: {
    mostrarPoryectos(state) {
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
    }
  }
})
