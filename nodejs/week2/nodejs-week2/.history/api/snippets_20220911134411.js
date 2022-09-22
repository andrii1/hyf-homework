// Contents of api/snippets.js
require("../database");
const express = require("express");
const router = express.Router();

// GET /api/snippets
app.get("/", async (request, response) => {
  // TODO
  const [rows] = await knex.raw("SELECT * from users ORDER by id Asc");
  response.send({ rows });
});

// TODO: POST /api/snippets

// TODO: GET /api/snippets/:id

module.exports = router;
