const { Pool, Client } = require("pg");
const client = new Client({
	connectinoString: proceess.env.DATABASE_URL
});


client.connect();

module.exports = client;