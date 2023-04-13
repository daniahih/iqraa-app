import * as BooksConstant from "../Constants/BooksConstants";

// GET ALL Books

export const BooksListReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case BooksConstant.BOOKS_LIST_REQUEST:
      return { isLoading: true };
    case BooksConstant.BOOKS_LIST_SUCCESS:
      return {
        isLoading: false,
        books: action.payload.books,
        pages: action.payload.pages,
        page: action.payload.page,
        totalBooks: action.payload.totalBooks,
      };
    case BooksConstant.BOOKS_LIST_FAIL:
      return { isLoading: false, isError: action.payload };
    default:
      return state;
  }
};

// delete all books
export const deleteBookReducer = (state = {}, action) => {
  switch (action.type) {
    case BooksConstant.DELETE_BOOK_REQUEST:
      return { isLoading: true };
    case BooksConstant.DELETE_BOOK_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case BooksConstant.DELETE_BOOK_FAIL:
      return { isLoading: false, isError: action.payload };
    default:
      return state;
  }
};

// DELETE ALL MOVIES

export const deleteAllBooksReducer = (state = {}, action) => {
  switch (action.type) {
    case BooksConstant.DELETE_ALL_BOOKS_REQUEST:
      return { isLoading: true };
    case BooksConstant.DELETE_ALL_BOOKS_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case BooksConstant.DELETE_ALL_BOOKS_FAIL:
      return { isLoading: false, isError: action.payload };
    default:
      return state;
  }
};

// GET BOOK BY ID

export const bookDetailsReducer = (state = { book: {} }, action) => {
  switch (action.type) {
    case BooksConstant.BOOK_DETAILS_REQUEST:
      return { ...state, isLoading: true };
    case BooksConstant.BOOK_DETAILS_SUCCESS:
      return { isLoading: false, book: action.payload };
    case BooksConstant.BOOK_DETAILS_FAIL:
      return { isLoading: false, isError: action.payload };
    case BooksConstant.BOOK_DETAILS_RESET:
      return { book: {} };
    default:
      return state;
  }
};
// REVIEW BOOK

export const bookReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case BooksConstant.BOOK_REVIEW_REQUEST:
      return { isLoading: true };
    case BooksConstant.BOOK_REVIEW_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case BooksConstant.BOOK_REVIEW_FAIL:
      return { isLoading: false, isError: action.payload };
    case BooksConstant.BOOK_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
