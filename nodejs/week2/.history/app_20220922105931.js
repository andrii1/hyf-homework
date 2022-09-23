const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const documents = require("./documents.json");

// Support parsing JSON requests
app.use(express.json());

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

router.get("/:id", async (request, response) => {
  // TODO
  const [rows] = await knex.raw(
    `SELECT * from users WHERE id = ${request.params.id}`
  );
  response.send({ rows });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
