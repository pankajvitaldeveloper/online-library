import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

// BrowseBooks component displays a list of books.
// It supports filtering by category (from URL) and searching by title or author.
export default function BrowseBooks() {
  // Get the category from the route parameters (if present)
  const { category } = useParams();
  // Get the list of books from the Redux store
  const books = useSelector(state => state.books.books);
  // State for the search query input
  const [query, setQuery] = useState("");

  // Filter books by category (if provided) and search query
  const filteredBooks = books.filter(book =>
    (!category || book.category === category) &&
    (book.title.toLowerCase().includes(query.toLowerCase()) ||
     book.author.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* Display the heading based on category */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        {category ? `${category} Books` : "All Books"}
      </h1>
      {/* Search input for filtering books by title or author */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
      {/* List of filtered books */}
      <ul className="space-y-4">
        {filteredBooks.length === 0 ? (
          // Show message if no books match the filter
          <li className="text-gray-500 text-center">No books found.</li>
        ) : (
          // Display each book in reverse order (newest first)
          filteredBooks.slice()
            .reverse().map(book => (
            <li key={book.id} className="bg-blue-50 rounded-lg p-4 shadow hover:shadow-md transition">
              {/* Link to the book details page */}
              <Link
                to={`/book/${book.id}`}
                className="text-lg font-semibold text-blue-800 hover:underline"
              >
                {book.title}
              </Link>
              <div className="text-gray-600 text-sm mt-1">by {book.author}</div>
              <div className="text-xs text-gray-400 mt-1">{book.category}</div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}