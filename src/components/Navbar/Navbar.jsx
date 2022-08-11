import React from "react";
import { useState } from "react";

export default function Navbar() {
  const [themeIcon, setThemeIcon] = useState("ri-sun-line");
  const handleTheme = () => {
    let body = document.body;

    setThemeIcon(
      body.classList.contains("dark") ? "ri-moon-line" : "ri-sun-line"
    );

    body.classList.toggle("dark");
  };
  return (
    <div className=" px-5  fixed top-0 left-0 w-full h-20 flex items-center justify-center bg-white dark:bg-gray-800 text-slate-900 dark:text-white border-b dark:border-gray-700 border-opacity-60">
      <div className="container h-full flex items-center justify-between">
        <span className="text-lg font-bold">Bookstore</span>
        <button
          onClick={handleTheme}
          className="outline-none text-white bg-indigo-500 flex items-center justify-center px-3 py-2 rounded-md shadow-sm hover:bg-indigo-600 transition duration-400"
        >
          <i className={themeIcon}></i>
        </button>
      </div>
    </div>
  );
}
