import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { GoEye } from "react-icons/go";
import { Link } from "react-router-dom";
const Head =
  "text-xs text-left  text-dryGray font-semibold  px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";
const Rows = (book, i, admin) => {
  return (
    <tr key={i}>
      <td className={`${Text}`}>
        <div className="w-12 p-1 bg-dry border  border-border h-12 rounded overflow-hidden ">
          <img
            className="h-full w-full object-cover"
            src={`/imges/Books/${book.image}`}
            alt={book.title}
          />
        </div>
      </td>
      <td className={`${Text}`}> {book.title}</td>
      <td className={`${Text}`}> {book.category}</td>
      <td className={`${Text}`}> {book.language}</td>
      <td className={`${Text}`}> {book.Author}</td>
      <td className={`${Text} float-right flex-row gap-2 `}>
        {admin ? (
          <>
            <div className="flex gap-2">
              <button className=" bg-star text-white rounded flex-colo w-6 h-6  ">
                <AiFillEdit />
              </button>
              <button className="bg-star text-white rounded flex-colo w-6 h-6 ">
                <MdDelete />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-2">
              <button className=" bg-star text-white rounded flex-colo w-6 h-6  ">
                <AiOutlineCloudDownload />
              </button>
              <Link
                to={`/book/${book.name}`}
                className="bg-star text-white rounded flex-colo w-6 h-6 "
              >
                <GoEye />
              </Link>
            </div>
          </>
        )}
      </td>
    </tr>
  );
};
function Table({ data, admin }) {
  return (
    <div className=" overflow-x-scroll overflow-hidden relative w-full ">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-star">
            <th scope="col" className={`${Head}`}>
              Image
            </th>
            <th scope="col" className={`${Head}`}>
              Tiltle
            </th>
            <th scope="col" className={`${Head}`}>
              Category
            </th>
            <th scope="col" className={`${Head}`}>
              Languge
            </th>
            <th scope="col" className={`${Head} `}>
              Author
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-border ">
          {data.map((book, i) => Rows(book, i, admin))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
