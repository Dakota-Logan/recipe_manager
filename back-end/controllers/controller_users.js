let express = require("express");
let userService = require("../services/service_users");

class UserController {
	constructor() {
		this.router = express
			.Router()
			.get("/", this.login)
			.post("/register", this.register)
			// .post("/reset", this.resetPassword)
			// .delete("/", this.delete)
	}
	
	async login (req, res, next) {
		userService.
	}
	
	async register (req, res, next) {
	
	}
}

module.exports = UserController;