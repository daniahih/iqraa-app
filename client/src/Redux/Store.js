import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as User from "./Reducers/userReducer";
import * as Categories from "./Reducers/CategoriesReducer";
import * as Emotions from "./Reducers/EmotionReducer";

const rootReducer = combineReducers({
  // user reducers
  userLogin: User.userLoginReducer,
  userRegister: User.userRegisterReducer,
  userUpdateProfile: User.updateProfileReducer,
  userDeleteProfile: User.userDeleteReducer,
  userChangePassword: User.userChangePasswordReducer,
  userGetLikedBooks: User.userGetLikedBooksReducer,
  deleteLikedBooks: User.userDeleteLikedBooksReducer,
  getAllUsers: User.adminGetAllUsersReducer,
  deleteUser: User.adminDeleteUserReducer,

  categoriesList: Categories.categoriesListReducer,
  createCategory: Categories.createCategoryReducer,
  deleteCategory: Categories.deleteCategoryReducer,
  updateCategory: Categories.updateCategoryReducer,
  // emotion
  emotionList: Emotions.emotionsListReducer,
  createEmotion: Emotions.createEmotionReducer,
  deleteEmotion: Emotions.deleteEmotionReducer,
  updateEmotion: Emotions.updateEmotionReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
//initialState
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  // userRegister: { userInfo: userInfoFromStorage },
};
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
