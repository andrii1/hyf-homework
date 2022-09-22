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
  console.log(request.body); // your JSON
  response.send(`POST request to homepage ${request.body}`);
  //const [rows] = await knex.raw(
  //  `INSERT INTO snippets(id,created_at,user_id,title,contents,is_private) VALUES(1,'2022-09-12 00:00:00',1,'test','test2',1)`
  // );
  //response.send(`${request.headers}`);
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
