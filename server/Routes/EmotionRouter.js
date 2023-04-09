const express = require("express");
const router = express.Router();
const {
  getEmotions,
  createEmotion,
  updateEmotion,
  deleteEmotion,
} = require("../Controllers/EmotionControllers");

// public routes
router.route("/").get(getEmotions);
// admin routes
router.route("/").post(createEmotion);
router.route("/:id").put(updateEmotion);
router.route("/:id").delete(deleteEmotion);

module.exports = router;
