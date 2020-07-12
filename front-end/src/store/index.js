import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import ModA from "./account_store.js";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loadedRecipes: [],
		account: {}
	},
	mutations: {},
	actions: {
		getRecipes ( { commit, dispatch },  ) {
		}
	},
	modules: {
		ModA: ModA
	}
})
