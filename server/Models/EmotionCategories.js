const mongoose = require("mongoose");
const EmotionSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Emotion", EmotionSchema);
