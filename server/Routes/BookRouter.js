const express = require("express");
const router = express.Router();

// const { protect, admin } = require("../middleware/Auth");
const { importBooks, getBooks } = require("../Controllers/BooksControllers");

router.route("/import").post(importBooks);
router.route("/").get(getBooks);

// admin router

module.exports = router;
