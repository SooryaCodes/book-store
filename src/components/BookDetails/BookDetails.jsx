import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";

export default function BookDetails({ book }) {
  const { author, title, id } = book;
  const { dispatch } = useContext(BookContext);
  return (
    <li className="font-semibold pl-3 pr-4 py-3 flex items-center justify-between text-sm">
      <div className="w-0 flex-1 flex items-center">
        <span className="ml-2 flex-1 w-0 truncate text-slate-900 dark:text-white ">
          {title}{" "}
          <span className="ml-1 flex-1 w-0  text-slate-500 truncate dark:text-slate-400  ">
            {" "}
            By <span className="italic">{author}</span>
          </span>
        </span>
      </div>
      <div className="ml-4 flex-shrink-0  ">
        <button
          onClick={() => dispatch({ type: "REMOVE_BOOK", id: id })}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          <svg
            className="fill-indigo-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" />
          </svg>
        </button>
      </div>
    </li>
  );
}
