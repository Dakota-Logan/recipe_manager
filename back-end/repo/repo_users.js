class user {
	constructor () {
		this.client = require("../util/repo_conf");
		this.crypto = require("crypto");
	}
	
	async login ( data ) {
		let res;
		
		try {
			res = await this.client.query("SELECT * FROM users WHERE email = $1", [ data.email ]).rows[0];
		} catch (e) {
			console.error("There has been an error: ")
			console.error(e)
		}
		
		if (this.passwordChecker(data.password, res.password))
			return res
		else throw new Error("Wrong email or password");
		
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