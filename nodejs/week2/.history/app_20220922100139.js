const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const documents = require("./documents.json");

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send(documents);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
