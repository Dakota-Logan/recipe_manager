let express = require("express")
	, userService = require("../services/service_users")
	, passport = require("passport")
	, LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(async ( email, password, done ) => {
	try {
		console.log("LOCAL STRATEGY ENACTING:", `\n email/pw: ${email}\\${password}`)
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
			.post("/login", this.login)
			.post("/register", this.register)
			// .delete("/delete", this.delete)
			// .post("/logout", this.logout)
			.use("", this.last)
			.get("/isauth", this.loggedInQ)
	}
	
	log ( req, res, next ) {
		console.log("A request!");
		console.log(req.body);
		next();
	}
	
	async login ( req, res, next ) {
		try {
			passport.authenticate("local",
				{},
				(err, res, req, next)=>{
					if(err)
						res.status(400).send("Bad username or password.")
				});
			res.send("Logged In!");
		} catch (e) {
			return res.redirect("/register");
		}
	}
	
	async register ( req, res, next ) {
		try {
			let user = await userService.register(req.body);
			return res.status(200).send("Successfully created account!")
		} catch (e) {
			console.log(e)
			return res.status(400).send("An error has occurred.");
		}
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
	
	async loggedInQ (req, res, next) {
		let ath = req.isAuthenticated();
		res.send(`Are you authenticated? : ${ath}`);
	}
	
}

module.exports = UserController;