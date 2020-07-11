<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
	import UIkit from "uikit/dist/js/uikit.js";
	import Icons from 'uikit/dist/js/uikit-icons.min.js';
	
	UIkit.use(Icons);
	
	export default {
		name: "App"
	};
</script>

<style>
	@import "~uikit/dist/css/uikit.css";
</style>