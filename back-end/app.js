const express = require("express")
	, constpath = require("path")
	, cookieParser = require("cookie-parser")
	, logger = require("morgan")
	, bodyParser = require("body-parser")
	, passport = require("passport");

const usersRouter = require("./controllers/controller_users");

var app = express();

// app.use(require("express-flash")());
app.use(require("express-session")({
	secret: process.env.SESSION_SECRET
}));
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