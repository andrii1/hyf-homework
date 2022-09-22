// Contents of api/snippets.js
require("../database");
const express = require("express");
const router = express.Router();

// GET /api/snippets
router.get("/", async (request, response) => {
  // TODO
});

// TODO: POST /api/snippets

app.get("/all-users", async (req, res) => {
  const [rows] = await knex.raw("SELECT * from users ORDER by id Asc");
  res.send({ rows });
});
// TODO: GET /api/snippets/:id

module.exports = router;
