const mod = {
	state: () => ( {
		isUserLoggedIn: false
	} ),
	mutations: {
		login ( state, data ) {
			Axios.post()
			
		},
		register ( state, data ) {
		},
		logout ( state, data ) {
		}
	},
	actions: {
		login ( { commit, dispatch }, creds ) {
			fetch()
		},
		register ( { commit, dispatch }, account ) {
		},
		logout () {
		},
		//helpers
		async SOFetch ( { commit, dispatch }, w, m, d ) {
			let where = w,
				method,
				data = d;
			
			//? Check the type of fetch request.
			switch (m) {
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
				let RR = await fetch(where, {
					method: method,
					body: data
				});
				
				return RR;
			} catch (e) {
				return e;
			}
		}
	},
	getters: {
		isLogged ( { state } ) {
			return state.isUserLoggedIn;
		}
	}
}

module.exports = mod;