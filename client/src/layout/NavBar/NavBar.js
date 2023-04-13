import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { likedBooks } = useSelector((state) => state.userGetLikedBooks);
  const hover = "hover:text-star transtions text-white ";
  const Hover = ({ isActive }) => (isActive ? "text-star" : hover);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/books/${search}`);
      setSearch(search);
    } else {
      navigate("/books");
    }
  };
  return (
    <header>
      <nav className="bg-main shadow-md sticky top-0 z-20">
        <div className=" container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7  justify-between items-center ">
          <div className="col-span-1  h-20 lg:h-20 lg:block hidden">
            <Link to="/">
              <img
                src="logo.png"
                alt="logo"
                className="w-full h-20 object-contain"
              />
            </Link>
          </div>
          {/* search form  */}
          <div className=" col-span-3">
            <form
              onSubmit={handleSearch}
              className=" w-full text-sm bg-dryGray rounded flex-btn gap-4"
            >
              <button
                type="submit"
                className="bg-star w-12 flex-colo h-12 rounded text-white"
              >
                <BsSearch />
              </button>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder=" Search for Book "
                className="font-medium  text-sm w-11/12 h-12  bg-transparent border-none px-2 text-black"
              />
            </form>
          </div>
          <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center ">
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/aboutus" className={Hover}>
              About Us
            </NavLink>
            <NavLink to="/contactus" className={Hover}>
              Contact Us
            </NavLink>
            <NavLink
              to={
                userInfo?.isAdmin
                  ? "/dashboard"
                  : userInfo
                  ? "/profile"
                  : "/login"
              }
              className={Hover}
            >
              <CiUser className=" w-6 h-6" />
            </NavLink>
            <NavLink to="/favourite" className={`${Hover} realtive`}>
              <FaHeart className=" w-6 h-6" />
              <div className="w-5 h-5 flex-colo rounded-full bg-star text-s text-red absolute top-4 right-11 ">
                {likedBooks?.length}
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
