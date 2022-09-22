const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 33060,
    user: "root",
    password: "123456",
    database: "hyf_node_week1",
  },
});

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Class!");
});

app.get("/info", async (req, res) => {
  const dbResult = await knex.raw("SELECT VERSION()");
  const row = dbResult[0][0];
  res.json({ nodeVersion: process.version, mysqlVersion: row["VERSION()"] });
});

app.get("/all-users", async (req, res) => {
  const dbResult = await knex.raw("SELECT * from users");
  const row = dbResult[0][0];
  res.send({ data: row });
});
/*
/all-users should respond with all users sorted by ID
/unconfirmed-users should respond with unconfirmed users
/gmail-users should respond with users with an @gmail.com email
/2022-users should respond with users created in 2022
*/

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
