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
