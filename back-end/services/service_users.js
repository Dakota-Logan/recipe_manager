const _repo = require("../repo/repo_users");

class UserService {
	
	async FindUser (email, password) {
		let user = await _repo.FindUser(email);
		if()
	}
	
	async login ( data ) {
		return await _repo.login(data)
	}
	
	async register ( data ) {
		if (!data.username && !data.email)
			throw new Error("Please include username and password.")
		else if (data.password.length < 6)
			throw new Error("Password not long enough.");
		else if (data.username.length < 6)
			throw new Error("Username not long enough.");
		
		
	}
	
	async delete ( id ) {
	}
	
	async update ( id, updatedData ) {
	}
}

const service = new UserService();
module.exports = service;