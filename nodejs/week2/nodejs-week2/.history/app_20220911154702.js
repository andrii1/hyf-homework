const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use("/api/snippets", require("./api/snippets"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Class!");
});

router.post("/", async (request, response) => {
  console.log(request.body); // your JSON
  response.send(`POST request ${request.body}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
