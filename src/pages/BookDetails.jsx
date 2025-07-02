import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

// BookDetails component displays detailed information about a single book.
// It fetches the book by id from the Redux store using the URL parameter.
export default function BookDetails() {
  // Get the book id from the route parameters
  const { id } = useParams();
  // Find the book in the Redux store by matching the id
  const book = useSelector(state => state.books.books.find(b => b.id == id));

  // If the book is not found, show a not found message
  if (!book)
    return (
      <div className="max-w-xl mx-auto mt-16 p-6 bg-red-50 rounded-lg shadow text-center text-red-600 font-semibold">
        Book not found.
      </div>
    );

  // If the book is found, display its details
  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{book.title}</h1>
      <p className="mb-2 text-gray-700">
        <span className="font-semibold text-gray-800">Author:</span> {book.author}
      </p>
      <p className="mb-2 text-gray-700">
        <span className="font-semibold text-gray-800">Description:</span> {book.description}
      </p>
      <p className="mb-6 text-gray-700">
        <span className="font-semibold text-gray-800">Rating:</span> {book.rating}
      </p>
      {/* Link to go back to the books list */}
      <Link
        to="/books"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded transition"
      >
        Back to Browse
      </Link>
    </div>
  );
}
