// const express = require("express");
// const db = require("./data/dbConfig");

// const router = express.Router();

// router.get("/", (req, res) => {
//   db("accounts")
//     .then((accounts) => {
//       res.json(accounts);
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Error fetching accounts!", err });
//     });
// });

// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   db("accounts")
//     .where({ id })
//     .then((account) => {
//       res.status(200).json(account);
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Invalid ID!", err });
//     });
// });

// router.post("/", (req, res) => {
//   const newAccount = req.body;
//   db("accounts")
//     .insert(newAccount, "id")
//     .then((id) => {
//       db("accounts")
//         .where({ id })
//         .then((account) => {
//           res.status(200).json(account);
//         })
//         .catch((err) => {
//           res.status(500).json({ message: "Error posting!", err });
//         });
//     });
// });

// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;
//   db("accounts")
//     .where({ id })
//     .update(changes)
//     .then(() => {
//       db("accounts")
//         .where({ id })
//         .then((account) => {
//           res.status(201).json(account);
//         })
//         .catch((err) => {
//           res.status(500).json(err.message);
//         });
//     })
//     .catch((err) => {
//       res.status.json(500).json({ message: "Error adding new account!", err });
//     });
// });

// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   db("accounts")
//     .del()
//     .where({ id })
//     .then((count) => {
//       res.status(204).json({ message: "Successfully deleted account!", count });
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Failed to delete account!", err });
//     });
// });

// module.exports = router;
