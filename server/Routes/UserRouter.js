const express = require("express");
const router = express.Router();
const { RegisterUser, LoginUser } = require("../Controllers/userControlers");

router.route("/").post(RegisterUser);
router.route("/login").post(LoginUser);

module.exports = router;
