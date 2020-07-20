<template>
	<div>
		<div id="recipes" class="">
			<p class="uk- uk-text-center">Recipes</p>
			<button @click="getRecipes">refresh</button>
			<div v-for="recipe in result" :key="recipe.id" :title="recipe.id">
				<h4 class="">{{recipe.title}}</h4>
				<p class="">{{recipe.description}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";
	
	export default {
		name: "recipes",
		data () {
			return {};
		},
		mounted: {
			pageFetch: () => ( this.fetchNLoad() )
		},
		computed: {
			...mapGetters([
				"recipes",
				"pgRecipes"
			]),
			
		},
		methods: {
			...mapActions([
				"SOFetch",
				"getRecipes"
			]),
			fetchNLoad () {
				if(!this.recipes)
					this.getRecipes(null);
				//TODO Alert user that recipes were successfully fetched and stored.
			}
		}
	}
</script>