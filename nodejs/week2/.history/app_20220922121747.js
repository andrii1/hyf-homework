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
app.get("/documents/:id", (req, res) => {
  // TODO
  const paramsInteger = parseInt(req.params.id);
  const params = documents.filter(function (entry) {
    return entry.id === paramsInteger;
  });
  res.send(params);
});

app.post("/search", (req, res) => {
  const filterBody = req.body.fields;

  if (req.query.q && req.body.fields) {
    response.status(404).json({ error: "Bad request" });
  } else if (req.query.q) {
    const containsQuery = documents.filter(function (entry) {
      return entry.description.includes(req.query.q);
    });
    res.send(containsQuery);
  } else if (filterBody) {
    const filterByType = req.body.fields.type;
    console.log(filter);
    const filterResult = documents.filter(function (entry) {
      return entry.type === filterByType;
    });
    res.send(filterResult);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
