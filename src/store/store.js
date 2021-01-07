import Vue from 'vue';
import Vuex from 'vuex';
// import { db } from '../main';

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
    agregarProyecto() {
      
    }
  }
})
