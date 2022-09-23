const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const documents = require("./documents.json");

// Support parsing JSON requests
app.use(express.json());

app.get("/search", (req, res) => {
  if (req.query.q) {
    console.log(req.query.q);
    res.send(req.query.q);
  } else {
    res.send(documents);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
