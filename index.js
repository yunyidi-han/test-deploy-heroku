const express = require("express");
const { response } = require("express");
const server = express();

//no longer use a local port... so ask heroku for whatever port is open... process -> enviornment -> PORT
let PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("server listening");
});

server.get("/", (req, res) => {
  res.send("Welcome Home");
});

server.get("/github", (req, res) => {
  res.send("Welcome to github");
});
