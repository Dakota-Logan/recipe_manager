import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex)

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
	baseURL: base + "api/",
	timeout: 3000,
	withCredentials: true
})

export default new Vuex.Store({
	state: {
		loadedRecipes: []
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
