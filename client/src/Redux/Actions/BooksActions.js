// get all books action
import * as BooksApi from "../APIs/booksServices";
import * as BooksConstant from "../Constants/BooksConstants";
import { ErrorsAction } from "../Protection";

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
