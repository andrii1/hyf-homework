// Contents of api/snippets.js
const knex = require("../database");

const express = require("express");
const router = express.Router();

// GET /api/snippets
router.get("/", async (request, response) => {
  // TODO
  const [rows] = await knex.raw("SELECT * from users ORDER by id Asc");
  response.send({ rows });
});

// TODO: POST /api/snippets

// TODO: GET /api/snippets/:id

router.get("/:id", async (request, response) => {
  // TODO
  const [rows] = await knex.raw(
    `SELECT * from users WHERE id = ${request.params.id}`
  );
  response.send({ rows });
});

module.exports = router;
