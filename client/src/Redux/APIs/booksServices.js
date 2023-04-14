import Axios from "./Axios";
// get all books Function
const getAllBooksService = async (
  category,
  emotion,
  rate,
  pageNumber,
  search
) => {
  const { data } = await Axios.get(
    `/books?category=${category}&emotion=${emotion}&rate=${rate}&search=${search}&pageNumber=${pageNumber}`
  );
  return data;
};

// delete book Function
const deleteBookService = async (token, id) => {
  const { data } = await Axios.delete(`/books/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// delete all books Function
const deleteAllBooksService = async (token) => {
  const { data } = await Axios.delete("/books", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
// get book by id Function
const getBookByIdService = async (id) => {
  const { data } = await Axios.get(`/books/${id}`);
  return data;
};

// review book Function
const reviewBookService = async (token, id, review) => {
  const { data } = await Axios.post(`/books/${id}/reviews`, review, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// create book Function
const createBookService = async (token, book) => {
  const { data } = await Axios.post("/books", book, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export {
  getAllBooksService,
  deleteBookService,
  deleteAllBooksService,
  getBookByIdService,
  reviewBookService,
  createBookService,
};
