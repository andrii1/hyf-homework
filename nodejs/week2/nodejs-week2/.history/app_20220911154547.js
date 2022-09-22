const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use("/api/snippets", require("./api/snippets"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Class!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
