const _repo = require("../repo/repo_users");
const CC = require("../util/crypto");


class UserService {
	
	async FindUser (email, password) {
		let user = await _repo.FindUser(email);
		
		if (!CC.correctPassword(password, user.salt, user.hash))
			throw new Error("Bad password or email.");
		else {
			delete user.hash;
			delete user.salt;
			return user;
		}
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