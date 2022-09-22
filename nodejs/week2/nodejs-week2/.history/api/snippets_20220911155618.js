// Contents of api/snippets.js
const knex = require("../database");
const express = require("express");
const router = express.Router();

// GET /api/snippets
router.get("/", async (request, response) => {
  const [rows] = await knex.raw("SELECT * from users ORDER by id Asc");
  response.send({ rows });
});

// TODO: POST /api/snippets
router.post("/", async (request, response) => {
  const userId = 1;
  knex("snippets").insert({
    ...request.body,
    user_id: userId,
  });
  console.log(request.body); // your JSON
  response.send(`POST request ${request.body}`);
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
