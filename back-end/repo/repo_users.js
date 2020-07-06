//? Queries for ease of use.
let fndUsr = "SELECT * FROM users WHERE email = $1";


class user {
	constructor () {
		this.client = require("../util/repo_conf");
	}
	
	async FindUser(email) {
		return await this.client.query(fndUsr, email).rows[0];
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