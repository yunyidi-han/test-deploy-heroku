const express = require("express");
const { response } = require("express");
const server = express();

server.listen(3000, () => {
  console.log("server listening");
});

server.get("/", (req, res) => {
  res.send("Welcome Home");
});
