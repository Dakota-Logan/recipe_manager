const _repo = require("../repo/repo_users");
const CC = require("../conf/crypto");


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
		else if (data.username.length < 5)
			throw new Error("Username should be between 5 and 15 characters long.");
		else if (data.password.length < 6)
			throw new Error("Password not long enough.");
		else if (data.password.length > 100)
			throw new Error("Due to storage restraints, please shorten you password. (but damn that would be a secure password lol)");
		
		let salt = CC.generateSalt();
		
		let newUser = {
			username: data.username,
			email: data.email,
			salt: salt,
			hash: CC.encryptPassword(data.password, salt)
		}
		
		return await _repo.register(newUser);
	}
	
	async delete ( id ) {
	}
	
	async update ( id, updatedData ) {
	}
}

const service = new UserService();
module.exports = service;