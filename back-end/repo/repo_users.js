class user {
	constructor () {
		this.client = require("./repo_conf");
		this.crypto = require("crypto");
	}
	
	async login ( data ) {
		
		let res = await this.client.query("SELECT 1 FROM users WHERE email = $1", [ data.email ])
		console.log(res);
		
		
		// data.password = this.hashPassword(data.password);
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
	
	passwordChecker (pass, hash) {
		return !!bcrypt.compareSync(pass, hash);
	}
}

let _ = new user;
module.exports = _;