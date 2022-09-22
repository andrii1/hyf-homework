const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 33060,
    user: "root",
    password: "123456",
    database: "mysql_hyf",
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

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
