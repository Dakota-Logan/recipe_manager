import Vue from 'vue';
import VueRouter from 'vue-router';
import home from "../views/home.vue";
import recipes from "../views/recipes";
import

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "home",
		component: home
	},
	{
		path: "/recipes",
		name: "recipes",
		component: "recipes"
	}
]

const router = new VueRouter({
	routes
})

export default router
