const express = require("express");
const router = express.Router();

const { protect, admin } = require("../middleware/Auth");
const {
  importBooks,
  getBooks,
  getBookById,
  createBookReview,
} = require("../Controllers/BooksControllers");

router.route("/import").post(importBooks);
router.route("/").get(getBooks);
router.route("/:id").get(getBookById);

// private routes
router.route("/:id/reviews").post(protect, createBookReview);

// admin router

module.exports = router;
