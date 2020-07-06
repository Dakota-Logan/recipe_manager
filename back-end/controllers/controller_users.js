let express = require("express");
let userService = require("../services/service_users");

class UserController {
	constructor () {
		this.router = express
			.Router()
			.use("", this.log)
			.post("/login", this.login)
			.post("/register", this.register)
			
			
			.use("", this.last)
	}
	
	log ( req, res, next ) {
		console.log("A request!");
		console.log(req.body);
		next();
	}
	
	async login ( req, res, next ) {
	
	}
	
	async register ( req, res, next ) {
	
	}
	
	last ( req, res, next ) {
		res.status(404).send("Could not find that one, sorry!");
	}
	
	async profile (req, res, next) {
		// require("connect-ensure-login").ensureLoggedIn();
		
	}
	
	async logout (req, res, next) {
		req.logout();
		res.redirect("/");
	}
}

module.exports = UserController;