import Axios from "./Axios";
// register new user API CALL
const registerService = async (user) => {
  console.log("user", user);
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
export { registerService, logOutService, loginService, updateProfileService };
