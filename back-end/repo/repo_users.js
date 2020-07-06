//? Queries for ease of use.




class user {
	constructor () {
		this.client = require("../util/repo_conf");
		this.crypto = require("crypto");
	}
	
	async FindUser(email) {
		return await this.client.query()
	}
	
	async login ( data ) {
	}
	
	register () {
	}
	
	resetPassword () {
	}
	
	//soft(ish?) delete (personal info gone, statistics kept)
	deleteAccount () {
	}
	
	hashPassword ( pass ) {
		return bcrypt.hashSync(pass, 10);
	}
	
	passwordChecker ( pass, hash ) {
		return !!bcrypt.compareSync(pass, hash);
	}
}

let _ = new user;
module.exports = _;