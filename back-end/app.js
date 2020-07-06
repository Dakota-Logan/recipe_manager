const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");

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