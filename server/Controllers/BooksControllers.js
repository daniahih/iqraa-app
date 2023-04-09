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
      ...(search && { title: { $regex: search, $options: "i" } }),
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
// get book by id
// GET METHOD
const getBookById = asyncHandler(async (req, res) => {
  try {
    // find the boom in the db
    const book = await Book.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404);
      throw new Error("Book Not found ");
    }
  } catch {
    res.status(400).json({ message: error.message });
  }
});

// admin side
// create a book review
// POST method
// access private

const createBookReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  try {
    // find the boom in the db
    const book = await Book.findById(req.params.id);
    if (book) {
      const alreadyReviewed = book.reviews.find(
        (r) => r.userId.toString() === req.user._id.toString()
      );

      if (alreadyReviewed) {
        res.status(401);
        throw new Error("You already reviewed this book.");
      }
    }
    // else create a new review
    const review = {
      userName: req.user.fullName,
      userId: req.user._id,
      userImage: req.user.image,
      rating: Number(rating),
      comment,
    };
    // push the new review to the reviews array
    book.reviews.push(review);
    // increment the number of reviews
    book.numberOfReviews = book.reviews.length;

    // calculate the new rate
    book.rate =
      book.reviews.reduce((acc, item) => item.rating + acc, 0) /
      book.reviews.length;
    await book.save();
    res.status(201).json("Review added ");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = {
  importBooks,
  getBooks,
  getBookById,
  createBookReview,
};
