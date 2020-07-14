const mod = {
	state: () => ( {
		isUserLoggedIn: false
	} ),
	mutations: {
		login ( state, data ) {
		
			
		},
		register ( state, data ) {
		},
		logout ( state, data ) {
		}
	},
	actions: {
		login ( { commit, dispatch }, creds ) {
			dispatch("SOFetch", )
		},
		register ( { commit, dispatch }, account ) {
		},
		logout () {
		},
	},
	getters: {
		isLogged ( state ) {
			return state.isUserLoggedIn;
		}
	}
}

module.exports = mod;