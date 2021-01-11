import { createLocalVue, shallowMount } from '@vue/test-utils';
import App from '../../src/components/Proyectos';
import Vue from 'vue';
import Vuex from 'vuex';
import store from '../../src/store/store';
import VueRouter from 'vue-router';
import myRoutes from './mocks/routes';