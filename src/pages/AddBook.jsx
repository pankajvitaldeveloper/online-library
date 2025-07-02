import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

// AddBook component allows users to add a new book to the library.
// It manages form state, validates input, and dispatches an action to update the Redux store.
export default function AddBook() {
  // State to store form input values
  const [form, setForm] = useState({ title: "", author: "", description: "", category: "", rating: "" });
  // State to store error messages for form validation
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handles form submission: validates input and dispatches addBook action
  const handleSubmit = e => {
    e.preventDefault();
    const { title, author, description, category, rating } = form;

    // Check if any field is empty
    if (!title || !author || !description || !category || !rating) {
      setError("All fields are required.");
      return;
    }

    // Dispatch action to add the book to Redux store
    dispatch(addBook(form));
    // Redirect user to the books list page after adding
    navigate("/books");
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white rounded-lg shadow-md p-8">
      <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">Add New Book</h1>
      {/* Show error message if validation fails */}
      {error && (
        <p className="mb-4 text-red-600 text-center font-semibold bg-red-50 rounded py-2">{error}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input for book title */}
        <input
          placeholder="Title"
          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        {/* Input for book author */}
        <input
          placeholder="Author"
          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={e => setForm({ ...form, author: e.target.value })}
        />
        {/* Input for book description */}
        <textarea
          placeholder="Description"
          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        {/* Input for book category */}
        <input
          placeholder="Category"
          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={e => setForm({ ...form, category: e.target.value })}
        />
        {/* Input for book rating */}
        <input
          placeholder="Rating"
          type="number"
          step="0.1"
          max="5"
          min="0"
          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={e => setForm({ ...form, rating: e.target.value })}
        />
        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}