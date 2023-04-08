const asyncHandler = require("express-async-handler");
const Book = require("../Models/BooksModel");
const { BooksData } = require("../Data/BooksData");

const importBooks = asyncHandler(async (req, res) => {
  await Book.deleteMany({});
  const books = await Book.insertMany(BooksData);
  res.status(201).json(books);
});
module.exports = {
  importBooks,
};
