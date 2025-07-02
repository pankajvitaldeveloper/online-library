import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-700 px-4 py-3 shadow">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Logo/Title */}
        <Link to="/" className="text-white text-2xl font-bold tracking-wide">
          LibrarySys
        </Link>

        {/* Hamburger Toggle (Mobile) */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`flex-col sm:flex-row sm:flex gap-4 items-center absolute sm:static top-16 left-0 w-full sm:w-auto bg-blue-700 sm:bg-transparent transition-all duration-200 z-20 ${
            open ? "flex" : "hidden sm:flex"
          }`}
        >
          <Link
            to="/"
            className="text-white font-semibold hover:text-blue-200 transition py-2 px-4"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/books"
            className="text-white font-semibold hover:text-blue-200 transition py-2 px-4"
            onClick={() => setOpen(false)}
          >
            Browse Books
          </Link>
          <Link
            to="/add"
            className="text-white font-semibold hover:text-blue-200 transition py-2 px-4"
            onClick={() => setOpen(false)}
          >
            Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
}
