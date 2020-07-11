<template>
	<div id="app">
		<navbar/>
		<router-view/>
	</div>
</template>

<script>
	import UIkit from "uikit/dist/js/uikit.js";
	import Icons from 'uikit/dist/js/uikit-icons.min.js';
	import navbar from "./components/navbar.vue";
	
	UIkit.use(Icons);
	
	export default {
		name: "App",
		components: {
			navbar
		}
	};
</script>

<style>
	@import "~uikit/dist/css/uikit.css";
</style>