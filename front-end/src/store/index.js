import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loadedRecipes: [],
		isLoggedIn: false,
		account: {}
	},
	mutations: {},
	actions: {
		login ( { commit, dispatch }, creds ) {
		},
		register ( { commit, dispatch }, account ) {
		},
		getRecipes ( { commit, dispatch },  ) {
		}
	},
	modules: {}
})
