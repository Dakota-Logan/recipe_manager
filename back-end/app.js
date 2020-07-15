//TODOi fix cors (app.use(cors());
const express = require("express")
	, logger = require("morgan")
	, path = require("path")
	, serveStatic = require("serve-static")
	, cookieParser = require("cookie-parser")
	, bodyParser = require("body-parser")
	, passport = require("passport")
	, cors = require("cors");

const usersRouter = require("./controllers/controller_users");

var app = express();

app.use(express.static(path.join(__dirname, "public")));

// app.use(require("express-flash")());

app.use(cors({
	origin: process.env.corsOrigin,
	credentials: true,
}));
app.use(logger("dev"));
app.use(bodyParser.json())
app.use(cookieParser(""));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(require("express-session")({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60 * 60 * 24 }
}));

//<editor-fold desc="-> Passport de/serialization">
passport.serializeUser(( user, done ) => {
	done(null, user.email);
});

passport.deserializeUser(async ( email, cb ) => {
	try {
		cb(null, await require("./repo/repo_users").FindUser(email));
	} catch (e) {
		console.log(e);
		return cb(e);
	}
});
//</editor-fold>

app.use(passport.initialize());
app.use(passport.session());

app.use("/", serveStatic(path.join(__dirname+"/../front-end/dist")));

//Routes
app.get(/.*/, (req, res) => {
	res.sendFile(path.join(__dirname+"/../front-end/dist/index.html"));
});
app.use("/user", new usersRouter().router);

module.exports = app;