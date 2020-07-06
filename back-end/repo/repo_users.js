//? Queries for ease of use.
let fndUsr = "SELECT * FROM users WHERE email = $1";
let regi = "INSERT INTO users (username, email, hash, salt) VALUES ($1, $2, $3, $4)";


class user {
	constructor () {
		this.client = require("../conf/repo_conf");
	}
	
	async FindUser(email) {
		return await this.client.query(fndUsr, [email]).rows[0];
	}
	
	async login ( data ) {
	}
	
	async register (usr) {
		await this.client.query(regi, [usr.username, usr.email, usr.hash, usr.salt]);
	}
	
	async resetPassword () {
	}
	
	//soft(ish?) delete (personal info gone, statistics kept)
	async deleteAccount () {
	}
	
	async hashPassword ( pass ) {
		return bcrypt.hashSync(pass, 10);
	}
}

let _ = new user;
module.exports = _;