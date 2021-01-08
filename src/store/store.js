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
      console.log('mostrar proyectos');
      console.log('state : ' + JSON.stringify(state));
      return state.projects;
    },
    mostrarUsuario(state) {
      return state.usuario;
    }  
  },
  mutations: {
    cambiarProyectos(state, arreglo) {
      console.log('cambiar proyectos');
      console.log('arreglo ' + arreglo);
      state.projects = arreglo;
    },
    cambiarUsuario(state, arreglo) {
      state.usuario = arreglo;
    }
  },
  actions: {
    traerDataProyectos({commit}) {
      console.log('afuera de traer Proyecto');
      db.collection('projects').get().then(resp => {
        let arreglo = [];
        console.log('traer proyectos');
        resp.forEach(el => {
          arreglo.push({
            // id: el.id,
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
          arreglo.push({
          name: resp.data().name,
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
        name: data.name
      }).then(resp => {
        console.log(resp);
      })
    }
  }
})
