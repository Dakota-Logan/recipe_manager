const mod = {
	state: () => ( {
		isUserLoggedIn: false
	} ),
	mutations: {
		//TODO Start
		login ( state ) {
		
		},
		//TODO Start
		register ( state ) {
		},
		//TODO Start
		logout ( state, data ) {
		}
	},
	actions: {
		//TODOi Test
		async login ( { commit, dispatch }, loginCredentials ) {
			let data = {
				email: loginCredentials.email,
				password: loginCredentials.password
			};
			let loginResult = await dispatch("SOFetch", "/user/login", "c", data);
			console.log(loginResult);
		},
		//TODO Start
		register ( { commit, dispatch }, accountDetails ) {
			let data = {
				email: accountDetails.email,
				password: accountDetails.password
			};
			dispatch
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