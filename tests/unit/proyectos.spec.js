import { createLocalVue, shallowMount } from '@vue/test-utils';
import Proyectos from '../../src/components/Proyectos';
import Vue from 'vue';
import Vuex from 'vuex';
import store from '../../src/store/store';
import VueRouter from 'vue-router';
import myRoutes from './mocks/routes';

describe('Pruebas con el store', () => {
    beforeAll(() => {
        Vue.use(Vuex);
        store = new Vuex.Store(store)
    });
});

const localVue = createLocalVue();
const router = new VueRouter(myRoutes);

// Verificar la funcionalidad de eliminar proyecto
// Veo que la prueba no me pide tests unitarios. Sólo E2E. Vuelvo a la función editar.

