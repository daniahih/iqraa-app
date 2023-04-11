import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { DateFormat, shortUppercaseId } from "./notifiations/Empty";

const Head =
  "text-xs text-left  text-dryGray font-semibold  px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";
const Rows = ({ data, i, users, OnEditFunction, onDeleteFunction }) => {
  return (
    <tr key={i}>
      {users ? (
        <>
          <td className={`${Text}`}>
            <div className="w-12 p-1 bg-dry border  border-border h-12 rounded overflow-hidden ">
              <img
                className="h-full w-full object-cover"
                src={`${data.image ? data.image : "/imges/Users/1.jpg"}`}
                alt={data?.fullName}
              />
            </div>
          </td>
          <td className={`${Text}`}>
            {data?._id ? shortUppercaseId(data?._id) : "2R75T8"}...
          </td>
          <td className={`${Text}`}>{DateFormat(data?.createdAt)}</td>
          <td className={`${Text}`}> {data.fullName}</td>
          <td className={`${Text}`}> {data.email}</td>
          <td className={`${Text} float-right flex-row gap-2 `}>
            {!data?.isAdmin && (
              <button
                onClick={() => onDeleteFunction(data._id)}
                className="bg-star text-white rounded flex-colo w-6 h-6"
              >
                <MdDelete />
              </button>
            )}
          </td>
        </>
      ) : (
        // categories
        <>
          <td className={`${Text}`}> {data.id ? data.id : "214"}</td>
          <td className={`${Text}`}>
            {" "}
            {data.createAt ? data.createAt : "12-jan-2023"}
          </td>
          <td className={`${Text}`}> {data.title}</td>
          <td className={`${Text} float-right flex-row gap-2 `}>
            <div className="flex gap-2">
              <button className=" bg-star text-white rounded flex-colo w-6 h-6  ">
                <AiFillEdit />
              </button>
              <button className="bg-star text-white rounded flex-colo w-6 h-6 ">
                <MdDelete />
              </button>
            </div>
          </td>
        </>
      )}
    </tr>
  );
};
function Table2({ data, users, OnEditFunction, onDeleteFunction }) {
  return (
    <div className=" overflow-x-scroll overflow-hidden relative w-full ">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-star">
            {users ? (
              <>
                <th scope="col" className={`${Head}`}>
                  Image
                </th>
                <th scope="col" className={`${Head}`}>
                  Id
                </th>
                <th scope="col" className={`${Head}`}>
                  Data
                </th>
                <th scope="col" className={`${Head}`}>
                  Full Name
                </th>
                <th scope="col" className={`${Head}`}>
                  Email
                </th>
              </>
            ) : (
              <>
                <th scope="col" className={`${Head}`}>
                  Id
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
                <th scope="col" className={`${Head}`}>
                  Title
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-border ">
          {data.map((data, i) => (
            <Rows
              data={data}
              key={i}
              users={users}
              OnEditFunction={OnEditFunction}
              onDeleteFunction={onDeleteFunction}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table2;
