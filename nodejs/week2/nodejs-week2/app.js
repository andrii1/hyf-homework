const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Class!");
});

app.use("/api/snippets", require("./api/snippets"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});