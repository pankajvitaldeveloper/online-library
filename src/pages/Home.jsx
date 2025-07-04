import { Link } from "react-router-dom";

// Home component serves as the landing page for the online library.
// It displays book categories and a section for popular books.
export default function Home() {
  // List of book categories to display as links
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy"];
  return (
    <>
    <div className="max-w-3xl mx-auto py-12 px-4">
      {/* Main heading for the home page */}
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        Welcome to the Online Library
      </h1>
      {/* Section for book categories */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Categories:</h2>
        <ul className="grid grid-cols-2 gap-4">
          {categories.map(cat => (
            <li key={cat}>
              {/* Link to browse books by category */}
              <Link
                to={`/books/${cat}`}
                className="block bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium rounded-lg px-4 py-2 text-center transition"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Section for popular books and navigation to all books */}
      <div className="bg-gray-50 rounded-lg p-6 shadow">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Popular Books</h2>
        <p className="text-gray-600">
          See popular books below or{" "}
          {/* Link to browse all books */}
          <Link to="/books" className="text-blue-600 hover:underline font-medium">
            browse all
          </Link>.
        </p>
      </div>
    </div>
    <footer className="fixed right-10 bottom-10 text-gray-500 text-sm z-50">
      <a
        href="https://github.com/pankajvitaldeveloper/online-library.git"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-blue-600"
      >
        View on GitHub
      </a>
    </footer>
    </>
  );
}