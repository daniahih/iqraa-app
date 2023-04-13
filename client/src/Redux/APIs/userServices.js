import Axios from "./Axios";
// Register a new user API call
const registerService = async (user) => {
  const { data } = await Axios.post("/users", user);
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};

//logout user function
const logOutService = () => {
  localStorage.removeItem("userInfo");
  return null;
};
//login user api call
const loginService = async (user) => {
  const { data } = await Axios.post("/users/login", user);
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};

//update profile API call
const updateProfileService = async (user, token) => {
  const { data } = await Axios.put("/users", user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};

// delete user profile Function
const deleteProfileService = async (token) => {
  const { data } = await Axios.delete("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (data) {
    localStorage.removeItem("userInfo");
  }
  return data;
};

// change user password Function
const changePasswordService = async (passwords, token) => {
  const { data } = await Axios.put("/users/password", passwords, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// user get all liked movies Function
const getLikedBooksService = async (token) => {
  const { data } = await Axios.get("/users/favourite", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// user delete all favorites movies Function
const deleteAllLikedBooksService = async (token) => {
  const { data } = await Axios.delete("/users/favourite", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
// user like book Function
const likeBookService = async (bookId, token) => {
  const { data } = await Axios.post("/users/favourite", bookId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// admin get all users Function
const getAllUsersService = async (token) => {
  const { data } = await Axios.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
// admin delete user Function
const deleteUserByIdService = async (id, token) => {
  const { data } = await Axios.delete(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
export {
  registerService,
  logOutService,
  loginService,
  updateProfileService,
  deleteProfileService,
  changePasswordService,
  getLikedBooksService,
  deleteAllLikedBooksService,
  getAllUsersService,
  deleteUserByIdService,
  likeBookService,
};
