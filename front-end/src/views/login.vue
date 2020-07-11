<template>
	<div>
		<navbar/>
		<form action="" class="uk-form-horizontal uk-width-2-5 uk-margin-auto uk-flex-around">
			<h3>Email</h3>
			<input type="text" placeholder="email" class="uk-input">
			<h2>Password</h2>
			<input type="password" placeholder="password" class="uk-input">
			<button class="uk-button-large">submit</button>
		</form>
	</div>
</template>

<script>
	import navbar from "../components/navbar.vue";
	
	export default {
		name: "login",
		components: {
			navbar
		}
	}
</script>

<style scoped>

</style>