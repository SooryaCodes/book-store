import React from "react";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import BookDetails from "../BookDetails/BookDetails";

export default function BookList() {
  const { books } = useContext(BookContext);
  return books.length ? (
    <ul
      role="list"
      className="border border-gray-200 dark:border-gray-700 dark:border-opacity-60 rounded-md divide-y dark:divide-gray-700 dark:divide-opacity-60 m-5 md:m-10"
    >
      {books.map((book) => {
        return <BookDetails book={book} key={book.id} />;
      })}
    </ul>
  ) : (
    <div className="px-10 py-5 flex items-center justify-center w-full h-20 ">
      <span className="italic "> No Books to read. Hello free time :)</span>
    </div>
  );
}
