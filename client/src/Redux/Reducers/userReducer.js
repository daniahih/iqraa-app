import * as userConstants from "../Constants/userConstants";

//login
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN_REQUEST:
      return { isLoading: true };
    case userConstants.USER_LOGIN_SUCCESS:
      return { isLoading: false, userInfo: action.payload, isSuccess: true };
    case userConstants.USER_LOGIN_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.USER_LOGIN_RESET:
      return {};
    case userConstants.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

// register
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      return { isLoading: true };
    case userConstants.USER_REGISTER_SUCCESS:
      return { isLoading: false, userInfo: action.payload, isSuccess: true };
    case userConstants.USER_REGISTER_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.USER_REGISTER_RESET:
      return {};

    default:
      return state;
  }
};
// update profile
export const updateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_UPDATA_PROFILE_REQUEST:
      return { isLoading: true };
    case userConstants.USER_UPDATA_PROFILE_SUCCESS:
      return { isLoading: false, userInfo: action.payload, isSuccess: true };
    case userConstants.USER_UPDATA_PROFILE_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.USER_UPDATA_PROFILE_RESET:
      return {};

    default:
      return state;
  }
};

// DELETE PROFILE
export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_DELETE_REQUEST:
      return { isLoading: true };
    case userConstants.USER_DELETE_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case userConstants.USER_DELETE_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.USER_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
// USER RESET PASSWORD
export const userChangePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_CHANGE_PASSWORD_REQUEST:
      return { isLoading: true };
    case userConstants.USER_CHANGE_PASSWORD_SUCCESS:
      return {
        isLoading: false,
        message: action.payload.message,
        isSuccess: true,
      };
    case userConstants.USER_CHANGE_PASSWORD_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.USER_CHANGE_PASSWORD_RESET:
      return {};
    default:
      return state;
  }
};
//  get favourite Books
export const userGetLikedBooksReducer = (
  state = {
    likedBooks: [],
  },
  action
) => {
  switch (action.type) {
    case userConstants.USER_GET_LIKED_BOOKS_REQUEST:
      return { isLoading: true };
    case userConstants.USER_GET_LIKED_BOOKS_SUCCESS:
      return { isLoading: false, likedBooks: action.payload };
    case userConstants.USER_GET_LIKED_BOOKS_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.USER_GET_LIKED_BOOKS_RESET:
      return { likedBooks: [] };
    default:
      return state;
  }
};

//  delete all favourite books
export const userDeleteLikedBooksReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.DELETE_ALL_FAVORITES_REQUEST:
      return { isLoading: true };
    case userConstants.DELETE_ALL_FAVORITES_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
      };
    case userConstants.DELETE_ALL_FAVORITES_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.DELETE_ALL_FAVORITES_RESET:
      return {};
    default:
      return state;
  }
};
