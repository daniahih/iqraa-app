const express = require("express");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const storage = require("../Config/firebaseStorage");

const Uploadrouter = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
});

Uploadrouter.post("/", upload.single("file"), async (req, res) => {
  try {
    // get file from request
    const file = req.file;
    // create new file name
    if (file) {
      const fileName = `${uuidv4()}${path.extname(file.originalname)}`;
      const blob = storage.file(fileName);
      const blobStream = blob.createWriteStream({
        resumable: false,
        metadata: {
          contentType: file.mimetype,
        },
      });
      // if error
      blobStream.on("error", (error) => {
        res.status(400).json({ message: error.message });
      });
      // if success

      blobStream.on("finish", () => {
        // get public rul
        const publicURL = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${fileName}?alt=media`;
        // return the file name and its public url
        res.status(200).json({ publicURL });
      });
      blobStream.end(file.buffer);
    } else {
      res.status(400).json({ message: "please upload the file" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = {
  Uploadrouter,
};
