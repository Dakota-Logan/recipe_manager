<template>
	<navbar />
	<p>Hello world</p>
</template>

<script>
	import navbar from "../components/navbar.vue";
	
	export default {
		name: "recipes"
		, components: {
			navbar
		}
	}
</script>

<style scoped>
</style>