// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);

cont router = new VueRouter();

router.map({
    '/index':{
        component: App
    }
});

router.redirect({
    '*':'/index'
});

router.start(App,'#app');
