const mod = {
	state: () => ( {
		isUserLoggedIn: false
	} ),
	mutations: {
		//TODO Start
		login ( state, data ) {
		},
		//TODO Start
		register ( state, data ) {
		},
		//TODO Start
		logout ( state, data ) {
		}
	},
	actions: {
		//TODO Start
		login ( { commit, dispatch }, creds ) {
			dispatch("SOFetch",)
		},
		//TODO Start
		register ( { commit, dispatch }, account ) {
		},
		//TODO Start
		logout () {
		},
		//TODO Start
		getAccount () {
		}
	},
	getters: {
		isLogged ( state ) {
			return state.isUserLoggedIn;
		}
	}
}

module.exports = mod;