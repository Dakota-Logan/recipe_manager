<template>
	<div>
		<div class=" uk-container-expand uk-responsive-height">
			<form
				@submit.prevent="login"
				class="uk-align-center uk-form-horizontal uk-border-rounded uk-width-2-5@l uk-width-1-2@m  uk-width-1-1@s uk-flex uk-flex-column"
				style="border: 2px solid black;
						 padding: 3rem 4rem;
						 box-shadow: 5px 5px 20px gray;
						 background-color: gainsboro;
				">
				<h1>Log In: </h1>
				<h3>Email</h3>
				<input class="uk-input" placeholder="email" type="text" v-model="userData.email">
				<h2>Password</h2>
				<input class="uk-input" placeholder="password" type="password" v-model="userData.password">
				<button type="submit" class="uk-button-large uk-align-center">submit</button>
				<p class="uk-align-center">Don't have an account? Create one <a @click="">HERE.</a></p>
			</form>
			<button class="uk-button-group" @click="checkLogin">Check</button>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
//TODO finish login functionality and testing
export default {
	name: "login",
	data () {
		return {
			userData: {
				email: "",
				password: ""
			}
		}
	},
	methods: {
		...mapActions({
			loginAction: "login",
			loginCheck: "loginCheck"
		}),
		login () {
			this.loginAction(this.userData);
		},
		checkLogin () {
			this.loginCheck();
		}
	}
}
</script>