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
      return (
        entry.description.includes(req.query.q) ||
        entry.type.includes(req.query.q)
      );
    });

    if (containsQuery) {
      res.send(containsQuery);
    }
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

//POST /search
app.post("/search", (req, res) => {
  if (req.query.q && req.body.fields) {
    res.status(404).json({ error: "Bad request" });
  } else if (req.body.fields.type) {
    const filter = req.body.fields.type;
    const filterResults = documents.filter(function (entry) {
      return entry.type === filter;
    });
    res.send(filterResults);
  } else if (req.body.fields.description) {
    const filter = req.body.fields.description;
    const filterResults = documents.filter(function (entry) {
      return entry.type === filter;
    });
    res.send(filterResults);
  } else {
    res.status(404).json({ error: "Bad request, request body can't be empty" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
