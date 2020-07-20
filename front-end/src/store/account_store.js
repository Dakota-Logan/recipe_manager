const mod = {
	state: () => ( {
		isUserLoggedIn: false,
		account: {
			email: String
		}
	} ),
	mutations: {
		//TODO Start
		login ( state, email ) {
			state.isUserLoggedIn = true;
			state.account.email = email;
		},
		register ( state, email ) {
			state.isUserLoggedIn = true;
			state.account.email = email;
		},
		logout ( state ) {
			state.isUserLoggedIn = false;
			state.account.email = String;
		},
		deleteAccount ( state ) {
			state.isUserLoggedIn = false;
			state.account.email = String;
		},
		clearAccount ( state ) {
			//?For latter use as clearing the account object gets bigger and clearing manually gets wet.
		}
	},
	actions: {
		//TODOi Test
		async login ( { commit, dispatch }, loginCredentials ) {
			console.log(loginCredentials)
			let data = {
				email: loginCredentials.email,
				password: loginCredentials.password
			};
			let loginResult = await dispatch("SOFetch", { w: "/user/login", m: "c", d: data });
			//TODO check status code for successful login
			console.log(loginResult);
			// commit("login")
		},
		//TODO finish and test
		async register ( { commit, dispatch }, accountDetails ) {
			let data = {
				email: accountDetails.email,
				password: accountDetails.password
			};
			let registerResult = await dispatch("SOFetch", { w: "/user/register", m: "c", d: data });
			console.log(registerResult);
			//TODO check status code for successful registration
			// commit("register");
		},
		//TODO Finish and test
		async logout ( { commit, dispatch, getters }, email ) {
			if (!getters.isLogged())
				throw new Error //TODO Properly handle this.
			let data = { email };
			let logoutResult = await dispatch("SOFetch", { w: "user/logout", m: "c", d: data });
			state.account.email = String;
			//TODO Confirm logout to the user.d
		},
		//TODO Finish and test
		async getAccount ( { commit, dispatch, state } ) {
			if (!state.isUserLoggenIn)
				throw new Error(); //TODO Fail fast - redirect user to /login
			
			let data = { email: state.account.email };
			
			let accountResult = await dispatch("SOFetch", { w: "user/account", m: "r", d: data });
			//TODO commit data changes
		},
		//TODO Finish and test
		async deleteAccount ( { commit, dispatch }, { e, p } ) {
			let data = {
				email: e,
				password: p
			};
			dispatch("SOFetch", { w: "/user/deleteAccount", m: "d", d: data });
			commit("deleteAccount")
		},
		async loginCheck ( { dispatch } ) {
			dispatch("SOFetch", {w:"/user/isAuth", m: "r"});
		}
	},
	getters: {
		isLogged ( state ) {
			return state.isUserLoggedIn;
		}
	}
}

export default mod;