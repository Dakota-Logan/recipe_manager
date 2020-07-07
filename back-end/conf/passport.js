let _r = require("../repo/repo_users");
module.exports = function meh (passport) {

passport.serializeUser(( user, done ) => {
	console.log("serializing");
	done(null, user.email);
});

passport.deserializeUser(async ( email, cb ) => {
	console.log("deserializing");
	try {
		cb(null, await _r.FindUser(email));
	} catch (e) {
		console.log(e);
		return cb(e);
	}
})
}
