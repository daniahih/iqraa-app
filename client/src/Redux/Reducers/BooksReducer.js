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
