import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const [form, setForm] = useState({ title: "", author: "", description: "", category: "", rating: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const { title, author, description, category, rating } = form;

    if (!title || !author || !description || !category || !rating) {
      setError("All fields are required.");
      return;
    }

    dispatch(addBook(form));
    navigate("/books");
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white rounded-lg shadow-md p-8">
      <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">Add New Book</h1>
      {error && (
        <p className="mb-4 text-red-600 text-center font-semibold bg-red-50 rounded py-2">{error}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Title"
          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Author"
          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={e => setForm({ ...form, author: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        <input
          placeholder="Category"
          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={e => setForm({ ...form, category: e.target.value })}
        />
        <input
          placeholder="Rating"
          type="number"
          step="0.1"
          max="5"
          min="0"
          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={e => setForm({ ...form, rating: e.target.value })}
        />
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