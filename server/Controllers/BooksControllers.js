const asyncHandler = require("express-async-handler");
const Book = require("../Models/BooksModel");
const { BooksData } = require("../Data/BooksData");

// POST METHOD
const importBooks = asyncHandler(async (req, res) => {
  await Book.deleteMany({});
  const books = await Book.insertMany(BooksData);
  res.status(201).json(books);
});
//get all moives
//GET METHID
const getBooks = asyncHandler(async (req, res) => {
  try {
    const { category, rate, emotion, search } = req.query;
    let query = {
      ...(category && { category }),
      ...(rate && { rate }),
      ...(emotion && { emotion }),
      ...(search && { name: { $regex: search, $options: "i" } }),
    };
    // load more books functionality
    const page = Number(req.query.pageNumber) || 1;
    const limit = 2;
    const skip = (page - 1) * limit;
    // find books by query
    const books = await Book.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    // get total numbers of books
    const count = await Book.countDocuments(query);
    //send response with books  and total number of books
    res.json({
      books,
      page,
      pages: Math.ceil(count / limit),
      totalBooks: count,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = {
  importBooks,
  getBooks,
};
