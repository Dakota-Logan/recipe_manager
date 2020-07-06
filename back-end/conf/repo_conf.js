const { Client } = require("pg");

const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false
	}
});

!async function () {
	
	try {
		await client.connect();
		console.log("DB Connected")
	} catch (e) {
		console.error("There has been a connection error: ")
		console.error(e);
	}
}()

module.exports = client;