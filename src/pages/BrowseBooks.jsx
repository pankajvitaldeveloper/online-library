import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books.books);
  const [query, setQuery] = useState("");

  const filteredBooks = books.filter(book =>
    (!category || book.category === category) &&
    (book.title.toLowerCase().includes(query.toLowerCase()) ||
     book.author.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        {category ? `${category} Books` : "All Books"}
      </h1>
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
      <ul className="space-y-4">
        {filteredBooks.length === 0 ? (
          <li className="text-gray-500 text-center">No books found.</li>
        ) : (
          filteredBooks.slice()
      .reverse().map(book => (
            <li key={book.id} className="bg-blue-50 rounded-lg p-4 shadow hover:shadow-md transition">
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