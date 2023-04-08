const express = require("express");
const router = express.Router();
const {
  RegisterUser,
  LoginUser,
  UpdateUser,
  DeleteProfile,
  GetUsers,
  changedUserPassword,
  getLikedBooks,
  addLikedBook,
  deletedLikedBooks,
  deleteUser,
} = require("../Controllers/userControlers");
const { protect, admin } = require("../middleware/Auth");

router.route("/").post(RegisterUser);
router.route("/login").post(LoginUser);
router.route("/").put(protect, UpdateUser);
router.route("/").delete(protect, DeleteProfile);
router.route("/password").put(protect, changedUserPassword);
router.route("/favourite").get(protect, getLikedBooks);
router.route("/favourite").post(protect, addLikedBook);
router.route("/favourite").delete(protect, deletedLikedBooks);

// admin router
router.route("/").get(protect, admin, GetUsers);
router.route("/:id").delete(protect, admin, deleteUser);
module.exports = router;
