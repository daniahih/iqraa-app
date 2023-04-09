import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt, FaUserAlt } from "react-icons/fa";
import { RiBook2Fill, RiLockPasswordFill } from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { GrDocumentUpdate } from "react-icons/gr";
import { AiFillHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { LinkIcon } from "@heroicons/react/solid";

function SideBar({ children }) {
  const SideLinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: BsFillGridFill,
    },
    {
      name: "Books List ",
      link: "/bookslist",
      icon: FaListAlt,
    },
    {
      name: "AddBook",
      link: "/addbook",
      icon: RiBook2Fill,
    },
    {
      name: "Categories ",
      link: "/categories",
      icon: HiViewGridAdd,
    },
    {
      name: "Emotion ",
      link: "/emotion",
      icon: HiViewGridAdd,
    },
    {
      name: "Users",
      link: "/users",
      icon: FaUserAlt,
    },
    {
      name: "Update Profile  ",
      link: "/profile",
      icon: GrDocumentUpdate,
    },
    {
      name: "Favorites ",
      link: "/favourite",
      icon: AiFillHeart,
    },
    {
      name: "Change Password   ",
      link: "/password",
      icon: RiLockPasswordFill,
    },
  ];
  const active = "bg-star text-white";
  const hover = "hover:text-white  hover:bg-main";
  const inActive =
    "rounded font-meduim text-sm transitions flex gap-3 items-center p-4 ";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  return (
    <div className="min-h-screen container mx-auto px-2 ">
      <div className="xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6 ">
        <div className=" col-span-2 sticky bg-dry border border-border p-6 rounded-lg xl:mb-0 mb-5 text-white ">
          {SideLinks.map((link, index) => (
            <NavLink to={link.link} key={index} className={Hover}>
              <link.icon />
              <p className="text-white"> {link.name}</p>
            </NavLink>
          ))}
        </div>
        <div className="col-span-6 rounded-md bg-dry border-border text-white">
          {children}
        </div>
      </div>
    </div>
  );
}
export default SideBar;
