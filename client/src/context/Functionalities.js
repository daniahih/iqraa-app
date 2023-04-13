import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { likeBookAction } from "../Redux/Actions/userActions";
import Axios from "../Redux/APIs/Axios";

const IfBookIsLiked = (book) => {
  const { likedBooks } = useSelector((state) => state.userGetLikedBooks);
  return likedBooks?.find((likedBook) => likedBooks?._id === book?._id);
};

// Like book functionality
const LikeBook = (book, dispatch, userInfo) => {
  return !userInfo
    ? toast.error("Please Login to like a book")
    : dispatch(likeBookAction({ bookId: book?._id }));
};
export { IfBookIsLiked, LikeBook };
