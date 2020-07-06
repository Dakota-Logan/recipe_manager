const express = require("express")
	, logger = require("morgan")
	, path = require("path")
	, cookieParser = require("cookie-parser")
	, bodyParser = require("body-parser")
	, passport = require("passport");

const usersRouter = require("./controllers/controller_users");

var app = express();

// app.use(require("express-flash")());
app.use(require("express-session")({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 1000 * 30 }
}));
require("./conf/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json())
app.use(cookieParser(""));

app.use(express.static(path.join(__dirname, "public")));


//Routes
app.use("/user", new usersRouter().router);

module.exports = app;