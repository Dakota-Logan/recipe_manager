let crypto = require("crypto");

function generateSalt () {
	return crypto.randomBytes(16).toString("base64");
}

function encryptPassword ( pass, salt ) {
	return crypto
		.createHash("RSA-SHA256")
		.update(pass)
		.update(salt)
		.digest("hex");
}

function correctPassword ( pass, salt ) {
	return encryptPassword(pass, salt)
}