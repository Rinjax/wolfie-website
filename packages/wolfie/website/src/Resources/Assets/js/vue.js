window.Vue = require('vue');

import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css';
import {store} from './store/store.js';

Vue.use(Vuetify);

Vue.config.productionTip = false;

const files = require.context('../vue/global-components', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));


export const app = {
    vuetify: new Vuetify(),
    store: store,
    el: '#vue',
};






