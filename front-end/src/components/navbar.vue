<template>
	<nav class="uk-navbar">
		<div class="uk-navbar-left">
			<ul class="uk-navbar-nav">
				<li><a @click="goto('/')" class="" v-bind:class="{ 'uk-active': (isActive == 'home') }">Home</a></li>
				<li><a @click="goto('recipes')" v-bind:class="{ 'uk-active': (isActive == 'recipes') }">Recipes</a></li>
				<li><a @click="goto('account')" v-bind:class="{ 'uk-active': (isActive == 'account') }">Account</a></li>
			</ul>
		</div>
		
		<div class="uk-navbar-center" v-if="['login', 'register'].indexOf(this.$router.currentRoute.name) == -1">
			<form @submit="getRecipes" class="uk-form-horizontal uk-flex-inline">
				<input type="text" placeholder="Search Recipes" class="uk-search-input" v-model="search">
				<button class="uk-button">Sumbit</button>
			</form>
		</div>
		
		<div class="uk-navbar-right" v-if="!this.loggedIn">
			<ul class="uk-navbar-nav">
				<li><a @click="goto('login')" v-bind:class="{ 'uk-active': (isActive == 'login') }">Login</a></li>
				<li><a @click="goto('regitster')" v-bind:class="{ 'uk-active': (isActive == 'register') }">Register</a></li>
			</ul>
		</div>
	
	</nav>
</template>

<script>
	export default {
		name: "navbar",
		props: [ "isActive" ],
		data () {
			return {
				search: ""
			}
		},
		methods: {
			goto ( addr ) {
				console.log(this.$router.currentRoute)
				if (this.$router.currentRoute.name != addr)
					this.$router.push(addr);
			},
			getRecipes () {
				console.log(this.$data.search)
			}
		},
		computed: {
			loggedIn () {
				return this.$store.state.isLoggedIn;
			}
		}
	}
</script>
