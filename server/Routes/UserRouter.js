const express = require("express");
const router = express.Router();
const { RegisterUser } = require("../Controllers/userControlers");

router.route("/").post(RegisterUser);

module.exports = router;
