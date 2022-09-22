// Contents of api/snippets.js
require("../database");
const express = require("express");
const router = express.Router();

// GET /api/snippets
router.get("/api/snippets", async (request, response) => {
  // TODO
  const [rows] = await knex.raw("SELECT * from users ORDER by id Asc");
  res.send({ rows });
});

// TODO: POST /api/snippets

// TODO: GET /api/snippets/:id

module.exports = router;
