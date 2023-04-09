const express = require("express");
const router = express.Router();
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../Controllers/CategoriesControllers");

// public routes
router.route("/").get(getCategories);
// admin routes
router.route("/").post(createCategory);
router.route("/:id").put(updateCategory);
router.route("/:id").delete(deleteCategory);

module.exports = router;
