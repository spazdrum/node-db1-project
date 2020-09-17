const express = require("express");
const db = require("./data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db("accounts")
    .then((accounts) => {
      res.json(accounts);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error fetching accounts", err });
    });
});

module.exports = router;
