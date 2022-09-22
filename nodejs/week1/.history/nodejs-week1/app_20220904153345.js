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
  const dbResult = await knex.raw("SELECT * from users ORDER by id Desc");
  const rows = dbResult[0];
  res.send({ rows });
});

app.get("/unconfirmed-users", async (req, res) => {
  const dbResult = await knex.raw(
    "SELECT * from users WHERE confirmed_at is NULL"
  );
  const rows = dbResult[0];
  res.send({ rows });
});

app.get("/gmail-users", async (req, res) => {
  const dbResult = await knex.raw(
    "SELECT * from users WHERE email LIKE '%gmail%'"
  );
  const rows = dbResult[0];
  res.send({ rows });
});

app.get("/2022-users", async (req, res) => {
  const dbResult = await knex.raw(
    "SELECT * from users WHERE YEAR(created_at)=2022"
  );
  const rows = dbResult[0];
  res.send({ rows });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
