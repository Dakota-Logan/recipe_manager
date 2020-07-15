import Vue from "vue";
import Vuex from "vuex";
import ModA from "./account_store.js";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loadedRecipes: []
	},
	mutations: {},
	actions: {
		getRecipes ( { commit, dispatch }, ) {},
		
		//Helper functions
		/**
		 * @method
		 * The 1, 2, and 3 arguments should be as follows: 1| where |2| method |3| data
		 * @async
		 * @param w {string} The address to fetch from. (/recipes, /user/account, etc.)
		 * @param m {string} - Which method (crud operations) to use. Uses the letter of the operation from CRUD
		 * @param d {object} - The data to pass on (no formatting of the data is done between this method and the api).
		 * @returns {Promise<Response|*>}
		 */
		async SOFetch ( { commit, dispatch }, { w, m, d } ) {
			console.log(d)
			let where,
				method,
				data = d;
			
			if (w[0] == "/")
				where = "http://localhost:3000" + w;
			else
				where = "http://localhost:3000/" + w;
			
			//? Check the type of fetch request.
			switch (m.toLowerCase()) {
				case "c" :
					method = "post";
					break;
				case "r" :
					method = "get";
					break;
				case "u" :
					method = "put";
					break;
				case "d" :
					method = "delete";
					break;
				default:
					throw new Error("That is not a crud operation! (use lower case letters: c, r, u, or d)");
					break;
			}
			
			try {
				return await fetch(where, {
					credentials: "include",
					mode: "cors",
					method: method,
					body: data
				});
			} catch (e) {
				return e;
			}
		}
	},
	modules: {
		ModA: ModA
	}
})
