import {app} from './vue'

import MainVue from '../vue/main/MainVue'

app.render = h => h(MainVue);

let vue = new Vue(app);