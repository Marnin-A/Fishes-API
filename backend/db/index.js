const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  user: "marnin_a",
  host: "localhost",
  database: "fishes-app",
  password: process.env.password,
  port: 5432,
});
client.connect();
module.exports = client;
