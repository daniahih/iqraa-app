const express = require("express");
const router = express.Router();
const {
  RegisterUser,
  LoginUser,
  UpdateUser,
} = require("../Controllers/userControlers");
const { protect } = require("../middleware/Auth");

router.route("/").post(RegisterUser);
router.route("/login").post(LoginUser);
router.route("/").put(protect, UpdateUser);

module.exports = router;
