import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Columns from './components/Columns.vue';
import './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		// { path: '*', component: Columns }
		{ path: '/:left/:leftWidth?/:middle?/:middleWidth?/:right?/:rightWidth?', component: Columns }
	]
})

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
