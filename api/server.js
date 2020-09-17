const express = require("express");
const accountsRouter = require("../accountRouter");
const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());
server.use("/api/accounts", accountsRouter);

server.get("/", (req, res) => {
  res.send("Welcome to the Accounts Page!");
});

module.exports = server;
