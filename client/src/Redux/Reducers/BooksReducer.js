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
