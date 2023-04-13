// get all books action
import { toast } from "react-hot-toast";
import * as BooksApi from "../APIs/booksServices";
import * as BooksConstant from "../Constants/BooksConstants";
import { ErrorsAction, tokenProtection } from "../Protection";
export const getAllBooksAction =
  ({
    category = "",
    emotion = "",
    rate = "",
    search = "",
    pageNumber = "",
  } = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: BooksConstant.BOOKS_LIST_REQUEST });
      const response = await BooksApi.getAllBooksService(
        category,
        emotion,
        rate,
        search,
        pageNumber
      );
      dispatch({ type: BooksConstant.BOOKS_LIST_SUCCESS, payload: response });
    } catch (error) {
      ErrorsAction(error, dispatch, BooksConstant.BOOKS_LIST_FAIL);
    }
  };

// delete book action

export const deleteBookAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: BooksConstant.DELETE_BOOK_REQUEST });
    const response = await BooksApi.deleteBookService(
      tokenProtection(getState),
      id
    );
    dispatch({
      type: BooksConstant.DELETE_BOOK_SUCCESS,
      payload: response,
    });
    toast.success(`books deleted successfully`);
    dispatch(getAllBooksAction({}));
  } catch (error) {
    ErrorsAction(error, dispatch, BooksConstant.DELETE_BOOK_FAIL);
  }
};

// delete all books action
export const deleteAllBooksAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: BooksConstant.DELETE_ALL_BOOKS_REQUEST });
    const response = await BooksApi.deleteAllBooksService(
      tokenProtection(getState)
    );
    dispatch({
      type: BooksConstant.DELETE_ALL_BOOKS_SUCCESS,
      payload: response,
    });
    toast.success(`All Books deleted successfully`);
    dispatch(getAllBooksAction({}));
  } catch (error) {
    ErrorsAction(error, dispatch, BooksConstant.DELETE_ALL_BOOKS_FAIL);
  }
};
