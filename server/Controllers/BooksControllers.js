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

const updateBook = asyncHandler(async (req, res) => {
  try {
    // get the data from request body
    const {
      title,
      Author,
      PublicationData,
      bigimg,
      image,
      category,
      emotion,
      language,
      rate,
      numberOfReviews,
      description,
      pdf,
    } = req.body;
    // find the boom in the db
    const book = await Book.findById(req.params.id);
    if (book) {
      // update the book data
      book.title = title || book.title;
      book.Author = Author || book.Author;
      book.PublicationData = PublicationData || book.PublicationData;
      book.bigimg = bigimg || book.bigimg;
      book.image = image || book.image;
      book.category = category || book.category;
      book.emotion = emotion || book.emotion;
      book.language = language || book.language;
      book.rate = rate || book.rate;
      book.numberOfReviews = numberOfReviews || book.numberOfReviews;
      book.description = description || book.description;
      book.pdf = pdf || book.pdf;
    }
    // save the book in the database
    const updatedBook = await book.save();
    // send  the updated book to the client
    res.status(201).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const deleteBook = asyncHandler(async (req, res) => {
  try {
    // find the book in the db
    const book = await Book.findById(req.params.id);
    if (book) {
      await Book.deleteOne({ _id: req.params.id });
      res.json({ massage: "book removed" });
    } else {
      res.status(404);
      throw new Error("book not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete all books
// DELETE method
const deleteAllBooks = asyncHandler(async (req, res) => {
  try {
    await Book.deleteMany({});
    res.json({ massage: "all books removed " });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const createBook = asyncHandler(async (req, res) => {
  try {
    // get the data from request body
    const {
      title,
      Author,
      PublicationData,
      bigimg,
      image,
      category,
      emotion,
      language,
      rate,
      numberOfReviews,
      description,
      pdf,
    } = req.body;
    // create a new book

    const book = new Book({
      title,
      Author,
      PublicationData,
      bigimg,
      image,
      category,
      emotion,
      language,
      rate,
      numberOfReviews,
      description,
      pdf,
      userId: req.user._id,
    });
    // save the book to db
    if (book) {
      const createdBook = await book.save();
      res.status(201).json(createdBook);
    } else {
      res.status(400);
      throw new Error(" invalid book data ");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// create book
// post method
module.exports = {
  importBooks,
  getBooks,
  getBookById,
  createBookReview,
  updateBook,
  deleteBook,
  deleteAllBooks,
  createBook,
};
