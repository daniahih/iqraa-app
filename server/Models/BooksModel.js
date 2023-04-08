const mongoose = require("mongoose");
const reviweSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userImage: {
      type: String,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const BooksSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    Author: {
      type: String,
      required: true,
    },
    PublicationData: {
      type: Number,
      required: true,
    },
    bigimg: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    emotion: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
      default: 0,
    },
    numberOfReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    rewiews: [reviweSchema],
    description: {
      type: String,
    },
    pdf: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Books", BooksSchema);
