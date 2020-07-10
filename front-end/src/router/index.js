import Vue from 'vue';
import VueRouter from 'vue-router';
import home from "../views/home.vue";
import recipes from "../views/recipes";
import login from "../views/login";
import register from "../views/register";
import search_recipes from "../views/search_recipes";

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: "/",
			name: "home",
			component: home
		},
		{
			path: "/recipes",
			name: "recipes",
			component: recipes
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: "/register",
			name: "register",
			component: register
		},
		{
			path: "/search",
			name: "search_recipes",
			component: search_recipes
		}
	]
});
