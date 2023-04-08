const express = require("express");
const router = express.Router();

// const { protect, admin } = require("../middleware/Auth");
const { importBooks } = require("../Controllers/BooksControllers");

router.route("/import").post(importBooks);

// admin router

module.exports = router;
