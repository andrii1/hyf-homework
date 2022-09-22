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

app.get("/info", (req, res) => {
  res.json({ nodeVersion: process.version });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
