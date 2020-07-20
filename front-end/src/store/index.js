import Vue from "vue";
import Vuex from "vuex";
import ModA from "./account_store.js";
import ModB from "./search_store.js";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loadedRecipes: []
	},
	mutations: {
		saveRecipes ( state, recipes ) {
			state.loadedRecipes = recipes;
		
		},
		savePgRecipes ( state, recipes ) {
			state.loadedRecipes.push(recipes);
		}
	},
	actions: {
		async getRecipes ( { commit, dispatch }, pag ) {
			try {
				if (pag !== null) {
					let res = await dispatch("SOFetch", { w: "/recipes/null", m: "r" });
					console.log(res);
					commit("savePgRecipes");
				} else {
					let res = await dispatch("SOFetch", { w: `/recipes/${pag}`, m: "r"});
					commit("saveRecipes");
				}
			} catch (e) {
			
			}
			
		},
		
		//Helper functions
		
		/**
		 * @name SOFetch
		 * The 1, 2, and 3 arguments should be as follows: 1| where |2| method |3| data
		 * @param w {string} The address to fetch from. (/recipes, /user/account, etc.)
		 * @param m {string} - Which method (crud operations) to use. Uses the letter of the operation from CRUD
		 * @param d {object} - The data to pass on (no formatting of the data is done between this method and the api).
		 * @returns {Promise<jsonData>}
		 * @method
		 * @async
		 */
		async SOFetch ( { commit, dispatch }, { w, m, d } ) {
			console.log(d);
			let where = w,
				method,
				data = d || null;
			
			//? Check the type of fetch request.
			switch (m.toLowerCase()) {
				case "c" :
					method = "POST";
					break;
				case "r" :
					method = "GET";
					break;
				case "u" :
					method = "PUT";
					break;
				case "d" :
					method = "DELETE";
					break;
				default:
					throw new Error("That is not a crud operation!");
			}
			
			try {
				if (method === "POST" || method === "PUT" || method === "DELETE") {
					return await fetch(where, {
						credentials: "include",
						headers: new Headers({ "content-type": "application/json" }),
						method: method,
						body: JSON.stringify(data)
					});
				} else {
					return await fetch(where, {
						credentials: "include",
						headers: new Headers({ "content-type": "application/json" }),
						method: method
					});
				}
			} catch (e) {
				return e;
			}
		}
	},
	getters: {
		recipes ( state ) {
			return state.loadedRecipes;
		},
		pgRecipes ( state, offset ) {
			//! Is offset being passed an object or the raw data value? lmao..
			//TODOi Test the viability of this (should work first try; no cap).
			return state.loadedRecipes.slice(offset);
		}
	},
	modules: {
		ModA: ModA,
		ModB: ModB
	}
})
