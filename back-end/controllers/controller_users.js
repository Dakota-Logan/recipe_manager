let express = require("express")
	, userService = require("../services/service_users")
	, passport = require("passport")
	, LocalStrategy = require("passport-local").Strategy;3

//!TODO finish the routes for login (no get, only api routes) logout, delete account, etc.
//TODOi TEST ALL ROUTES FOR FUNCTIONALITY AND BASIC AUTH REQ
passport.use(new LocalStrategy(
	{ usernameField: "email" },
	async ( username, password, done ) => {
		try {
			console.log("LOCAL STRAT")
			let user = await userService.FindUser(username, password);
			console.log(`STRAT User: ${user.email}`);
			return done(null, user);
		} catch (e) {
			if (e.message.code === 400)
				return done(null, true);
			else
				return done(null, false, e);
		}
		
	}))


class UserController {
	constructor () {
		this.router = express
			.Router()
			// .use("/", this.log)
			.get("/isauth", this.loggedInQ)
			.post("/login", this.login)
			.post("/register", this.register);
			// .delete("/delete", this.delete);;;
			// .post("/logout", this.logout);;;
	}
	
	log ( req, res, next ) {
		console.log("A request!");
		console.log(req.body);
		next();
	}
	
	async login ( req, res, next ) {
		console.log(req.body);
		passport.authenticate("local", ( _, user ) => {
			if (user === false)
				res.status(500).send("An internal error has occurred.");
			else if (user === true)
				res.status(400).send("Invalid username or password");
			else {
				req.login(user, { session: true }, () => {});
				res.status(200).send("Logged in!");
			}
		})(req, res, next);
		
	}
	
	async register ( req, res ) {
		try {
			let user = await userService.register(req.body);
			return res.status(200).send("Successfully created account!")
		} catch (e) {
			console.log(e)
			return res.status(400).send("An error has occurred.");
		}
	}
	
	async logout ( req, res ) {
		req.logout();
		res.redirect("/");
	}
	
	async loggedInQ ( req, res ) {
		let ath = req.isAuthenticated();
		res.send(`<h1>Are you authenticated? : ${ath}</h1>`);
	}
	
	last ( req, res ) {
		res.status(404).send("Could not find that one, sorry!");
	}
	
}

module.exports = UserController;