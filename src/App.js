import BookForm from "./components/BookForm/BookForm";
import BookList from "./components/BookList/BookList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="font-Manrope w-full h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <Navbar />
      <div className="mx-5 md:mx-0 container shadow rounded-md bg-white dark:bg-gray-800 max-w-screen-md text-slate-900 dark:text-white dark:border dark:border-gray-700 dark:border-opacity-60 min-h-max">
        <BookList />
        <BookForm />
      </div>
    </div>
  );
}

export default App;
