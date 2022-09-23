const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const documents = require("./documents.json");

// Support parsing JSON requests
app.use(express.json());

//GET /search
app.get("/search", (req, res) => {
  if (req.query.q) {
    const containsQuery = documents.filter(function (entry) {
      return entry.description.includes(req.query.q);
    });
    res.send(containsQuery);
  } else {
    res.send(documents);
  }
});

//GET /documents/:id
app.get("/documents/:id", async (req, res) => {
  // TODO
  const paramsInteger = parseInt(req.params.id);
  const params = documents.filter(function (entry) {
    return entry.id === paramsInteger;
  });
  res.send(params);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
