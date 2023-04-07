const express = require("express");
const router = express.Router();
const {
  RegisterUser,
  LoginUser,
  UpdateUser,
  DeleteProfile,
  GetUsers,
} = require("../Controllers/userControlers");
const { protect } = require("../middleware/Auth");

router.route("/").post(RegisterUser);
router.route("/").get(GetUsers);
router.route("/login").post(LoginUser);
router.route("/").put(protect, UpdateUser);
router.route("/").delete(protect, DeleteProfile);
module.exports = router;
