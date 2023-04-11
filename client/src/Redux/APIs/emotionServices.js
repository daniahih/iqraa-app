import Axios from "./Axios";

// get all emotion Function
const getAllEmotionService = async () => {
  const { data } = await Axios.get("/emotions");
  return data;
};

// create new emotion Function
const createEomtionService = async (title, token) => {
  const { data } = await Axios.post("/emotions", title, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// update emotion Function
const updateEmotionService = async (id, title, token) => {
  const { data } = await Axios.put(`/emotions/${id}`, title, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// delete emotion Function
const deleteEmotionService = async (id, token) => {
  const { data } = await Axios.delete(`/emotions/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export {
  getAllEmotionService,
  createEomtionService,
  updateEmotionService,
  deleteEmotionService,
};
