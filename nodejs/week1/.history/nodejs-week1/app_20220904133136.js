const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Class!");
});

app.get("/info", (req, res) => {
  res.json{"nodeVersion": "v17.3.0"}};
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
