let express = require("express")
	, userService = require("../services/service_users")
	, passport = require("passport")
	, LocalStrategy = require("passport-local").Strategy;

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
			return done(null, false);
		}
		
	}))


class UserController {
	constructor () {
		this.router = express
			.Router()
			// .use("/", this.log)
			.get("/isauth", this.loggedInQ)
			.post("/login", this.login)
			.post("/register", this.register)
			// .delete("/delete", this.delete)
			// .post("/logout", this.logout)
			.get("/loginS", ( req, res ) => {
				res.send("You have logged in.")
			})
			.get("/loginF", ( req, res ) => {
				res.send("You have failed to log in.")
			})
			.get('/login', ( req, res ) => {
				const form = '<h1>Login Page</h1><form method="POST" action="/user/login">\
   Enter Email:<br><input type="text" name="email">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>';
				res.send(form);
			})
			.use("", this.last)
	}
	
	log ( req, res, next ) {
		console.log("A request!");
		console.log(req.body);
		next();
	}
	
	async login (req, res, next ) {
		passport.authenticate("local")(req, res, next);
		
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
		
		console.log("Checking for authentication: \n", req.session)
		let ath = req.isAuthenticated();
		console.log(ath);
		res.send(`<h1>Are you authenticated? : ${ath}</h1>`);
	}
	
	last ( req, res ) {
		res.status(404).send("Could not find that one, sorry!");
	}
	
}

module.exports = UserController;