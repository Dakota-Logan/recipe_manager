<template>
	<div>
		<div class="uk-width-1-1 uk-height-1-1">
			<form action=""
			      class="uk-form-horizontal uk-position-center uk-border-rounded uk-width-2-5 uk-flex-column uk-flex-around"
			      style="border: 2px solid black;
						 padding: 3rem 5rem;
						 box-shadow: 5px 5px 20px gray;
						 background-color: gainsboro;
						 min-width: 50%;
						">
				<h1>Log In: </h1>
				<h3>Email</h3>
				<input type="text" placeholder="email" class="uk-input">
				<h2>Password</h2>
				<input type="password" placeholder="password" class="uk-input">
				<button class="uk-button-large uk-align-center">submit</button>
				<p class="uk-align-center uk-margin-auto">Don't have an account? Create one <a @click="">HERE.</a></p>
			</form>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	
	export default {
		name: "login",
		computed: {
			...mapGetters([
				"isLogged"
			])
		},
		methods: {
			login () {}
		}
	}
</script>