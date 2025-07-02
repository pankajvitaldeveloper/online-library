import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector(state => state.books.books.find(b => b.id == id));

  if (!book)
    return (
      <div className="max-w-xl mx-auto mt-16 p-6 bg-red-50 rounded-lg shadow text-center text-red-600 font-semibold">
        Book not found.
      </div>
    );

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
      <Link
        to="/books"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded transition"
      >
        Back to Browse
      </Link>
    </div>
  );
}
