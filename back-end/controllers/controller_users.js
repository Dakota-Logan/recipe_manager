let express = require("express")
	, userService = require("../services/service_users")
	, passport = require("passport")
	, LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(async (email, password, done)=>{
	try {
		let user = await userService.FindUser(email, password);
		return done(null, user);
	} catch (e) {
		return done(null, false);
	}
	
}))


class UserController {
	constructor () {
		this.router = express
			.Router()
			.use("/", this.log)
		get("/", this.accountPage)
			.post("/login", this.login)
			.post("/register", this.register)
			.delete("/delete", this.delete)
			.post("/logout", this.logout)
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
	
	async profile ( req, res, next ) {
		// require("connect-ensure-login").ensureLoggedIn();
		
	}
	
	async logout ( req, res, next ) {
		req.logout();
		res.redirect("/");
	}
}

module.exports = UserController;