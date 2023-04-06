import React from "react";
import SideBar from "../SideBar";
import { FaRegListAlt } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import Table from "../../../components/Table";
import { Books } from "../../../Data/BookData";

function DashBoard() {
  const DashboardData = [
    {
      bg: "bg-orange-600",
      icon: FaRegListAlt,
      title: "Total Books",
      total: 20,
    },
    {
      bg: "bg-blue-600",
      icon: HiViewGridAdd,
      title: "Total Categories ",
      total: 8,
    },
    {
      bg: "bg-green-600",
      icon: FaUserAlt,
      title: "Total Users ",
      total: 8,
    },
  ];

  return (
    <div className="bg-main">
      <SideBar>
        <h1 className="text-xl font-bold"> DashBored</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {DashboardData.map((data, index) => (
            <div
              key={index}
              className="p-4 rounded bg-main border-border grid grid-cols-4 gap-2"
            >
              <div
                className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}
              >
                <data.icon />
              </div>
              <div className="col-span-3 ">
                <h2> {data.title}</h2>
                <p>{data.total}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="mt-6 text-md font-bold"> Reacent Book</h3>
        <Table data={Books.slice(0, 5)} admin={true} />
      </SideBar>
    </div>
  );
}

export default DashBoard;
