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
router.post("/", async (request, response) => {
  // TODO
  const [rows] = await knex.raw(
    `INSERT INTO users(id,created_at,confirmed_at,first_name,last_name,email) VALUES(3,'2022-09-12 00:00:00','2022-09-12 00:00:00','Andrew','G','ago@gmail.com')`
  );
  response.send({ rows });
});
// TODO: GET /api/snippets/:id
router.get("/:id", async (request, response) => {
  // TODO
  const [rows] = await knex.raw(
    `SELECT * from users WHERE id = ${request.params.id}`
  );
  response.send({ rows });
});

module.exports = router;
