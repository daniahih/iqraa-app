import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const Links = [
    {
      title: "Company",
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About Us",
          link: "/aboutus",
        },
        {
          name: "Contact Us",
          link: "/contactus",
        },
        {
          name: "Books",
          link: "/Books",
        },
      ],
    },
    {
      title: "Top Categories",
      links: [
        {
          name: "Fantasy",
          link: "#",
        },
        {
          name: "Motivational",
          link: "#",
        },
        {
          name: "Historical",
          link: "#",
        },
        {
          name: "Politics and social sciences",
          link: "#",
        },
      ],
    },
    {
      title: "My Account ",
      links: [
        {
          name: "DashBoard",
          link: "/Dashboard",
        },
        {
          name: "My Favourite ",
          link: "/favourite ",
        },
        {
          name: "Profile",
          link: "/profile",
        },
        {
          name: "Change Password ",
          link: "/password",
        },
      ],
    },
  ];
  return (
    <div className="bg-main py-4 border-t-2 border-main">
      <div className="container mx-auto  px-2">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10  justify-between">
          {Links.map((link, index) => (
            <div
              key={index}
              className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
            >
              <h3 className="test-md  lg:leading-7  font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                {link.title}
              </h3>
              <ul className=" text-sm flex flex-col space-y-2 ">
                {link.links.map((e, index) => (
                  <li key={index} className="flex items-baseline  mr-10 ">
                    <Link
                      to={e.link}
                      className="text-white inline-block w-full hover:text-star"
                    >
                      {e.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <Link to="/">
              {/* <img
                src="imges\logo.png"
                alt="logo"
                className="w-full h-20 object-contain"
              /> */}
              EQRA'
            </Link>
            <span>
              <p className="leading-7 text-sm text-white mt-5">Address</p>
            </span>
            <br></br>
            <span>Tel:052654896</span>
            <br></br>
            <span>Email : Eqra@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
