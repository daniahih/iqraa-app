const asyncHandler = require("express-async-handler");

const Emotions = require("../Models/EmotionCategories");
// public controllers

// get  emotions
// GET METHOD
const getEmotions = asyncHandler(async (req, res) => {
  try {
    // final all categories in database
    const emotions = await Emotions.find({});
    // send all caltegories to the client
    res.json(emotions);
  } catch (error) {
    res.status(400).json({ massage: error.massage });
  }
});
// create a emotion
// POST method
const createEmotion = asyncHandler(async (req, res) => {
  try {
    // get title from request body
    const { title } = req.body;
    // create new emotion
    const emotion = new Emotions({
      title,
    });
    //send new emotion to the client
    const createdEmotion = await emotion.save();
    res.status(201).json(createdEmotion);
  } catch (error) {
    res.status(400).json({ massage: error.massage });
  }
});

// update emotion
const updateEmotion = asyncHandler(async (req, res) => {
  try {
    // get emotion id from requesst params
    const emotion = await Emotions.findById(req.params.id);
    if (emotion) {
      //update emotion title
      emotion.title = req.body.title || emotion.title;
      // save the updated emotion in database
      const updatedEmotion = await emotion.save();
      // send the updated category to the client
      res.json(updatedEmotion);
    } else {
      res.status(404).json({ massage: " emotion  not found " });
    }
  } catch (error) {
    res.status(400).json({ massage: error.massage });
  }
});
// delete  emotion
// DELETE
const deleteEmotion = asyncHandler(async (req, res) => {
  try {
    //get emotion id from request params
    const emotion = await Emotions.findById(req.params.id);
    if (emotion) {
      // delete the category from database
      await emotion.deleteOne({ _id: req.params.id });
      // send success massage to client
      res.json({ massage: "emotion removed" });
    } else {
      res.status(404).json({ massage: "emotion not found" });
    }
  } catch (error) {
    res.status(400).json({ massage: error.massage });
  }
});

module.exports = {
  getEmotions,
  createEmotion,
  updateEmotion,
  deleteEmotion,
};
