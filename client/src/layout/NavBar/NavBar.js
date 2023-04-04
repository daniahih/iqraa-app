import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
const NavBar = () => {
  const hover = "hover:text-star transtions text-white ";
  const Hover = ({ isActive }) => (isActive ? "text-star" : hover);
  return (
    <header>
      <nav className="bg-main shadow-md sticky top-0 z-20">
        <div className=" container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7  justify-between items-center ">
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              {/* <img
                src="imges\logo.png"
                alt="logo"
                className="w-full h-20 object-contain"
              /> */}
              EQRA'
            </Link>
          </div>
          {/* search form  */}
          <div className=" col-span-3">
            <form className=" w-full text-sm bg-dryGray rounded flex-btn gap-4">
              <button
                type="submit"
                className="bg-star w-12 flex-colo h-12 rounded text-white"
              >
                <BsSearch />
              </button>
              <input
                type="text"
                placeholder=" Search for Book "
                className="font-medium  text-sm w-11/12 h-12  bg-transparent border-none px-2 text-black"
              />
            </form>
          </div>
          <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center ">
            <NavLink to="/">Books</NavLink>
            <NavLink to="/aboutus" className={Hover}>
              About Us
            </NavLink>
            <NavLink to="/contactus" className={Hover}>
              Contact Us
            </NavLink>
            <NavLink to="/login" className={Hover}>
              <CiUser className=" w-6 h-6" />
            </NavLink>
            <NavLink to="/favourite" className={`${Hover} realtive`}>
              <FaHeart className=" w-6 h-6" />
              <div className="w-5 h-5 flex-colo rounded-full bg-star text-s text-red absolute top-4 right-11 ">
                2
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
