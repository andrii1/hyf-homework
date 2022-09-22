const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use("/api/snippets", require("./api/snippets"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Class!");
});

router.post("/", async (request, response) => {
  // TODO
  console.log(request.body); // your JSON
  response.send(`POST request ${request.body}`);
  //const [rows] = await knex.raw(
  //  `INSERT INTO snippets(id,created_at,user_id,title,contents,is_private) VALUES(1,'2022-09-12 00:00:00',1,'test','test2',1)`
  // );
  //response.send(`${request.headers}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
