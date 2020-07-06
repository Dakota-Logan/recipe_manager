let crypto = require("crypto");

class CC {
	generateSalt () {
		return crypto.randomBytes(16).toString("base64");
	}
	
	encryptPassword ( pass, salt ) {
		return crypto
			.createHash("RSA-SHA256")
			.update(pass)
			.update(salt)
			.digest("hex");
	}
	
	correctPassword ( pass, salt, hash ) {
		return ( this.encryptPassword(pass, salt) === hash );
	}
}

module.exports = new CC;