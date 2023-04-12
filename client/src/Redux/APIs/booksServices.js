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
export { getAllBooksService };
