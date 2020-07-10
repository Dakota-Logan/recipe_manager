<template>
	<div>
		<navbar/>
		<p>Hello world</p>
	</div>
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