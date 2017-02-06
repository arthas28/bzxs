import Vue from "vue"; //会去node_modules\vue\package.json
import Home from './pages/home.vue';
import Assets from './assets/test.vue';
import Test from './components/test.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

var routes = [
	{ path: '/home', component: Home, name: 'home' },
	{ path: '/test', component: Test, name: 'test' }

];

var router = new VueRouter({
	routes: routes,
	hashbang: false,
	mode: 'history'
});

var vm = new Vue({
    el: '#indexWrapHome',
    data: { myTime: '2017-01-04' },
    router: router,
    components: {
    	Assets
    }
});