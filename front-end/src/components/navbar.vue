<template>
	<nav class="uk-navbar-container" uk-navbar>
		<div class="uk-navbar-left">
			<ul class="uk-navbar-nav">
				<li><a href="/" class="" v-bind:class="{ 'uk-active': (isActive == 'home') }">Home</a></li>
				<li><a href="/recipes" v-bind:class="{ 'uk-active': (isActive == 'recipes') }">Recipes</a></li>
				<li><a href="/account" v-bind:class="{ 'uk-active': (isActive == 'account') }">Account</a></li>
			</ul>
		</div>
		
		<div class="uk-navbar-center">
			<input type="text" class="uk-search" @click="getRecipes">
		</div>
		
		<div class="uk-navbar-right" v-if="!this.loggedIn">
			<ul class="uk-navbar-nav">
				<li ><a @click="goto('login')" v-bind:class="{ 'uk-active': (isActive == 'login') }">Login</a></li>
				<li><a @click="goto('regitster')" v-bind:class="{ 'uk-active': (isActive == 'register') }">Register</a></li>
			</ul>
		</div>
		
	</nav>
</template>

<script>
	export default {
		name: "navbar",
		props: ["isActive"],
		methods: {
			goto(addr) {
				this.$router.push(addr)
			}
		},
		computed: {
			loggedIn() {
				return this.$store.state.isLoggedIn;
			}
		}
	}
</script>
