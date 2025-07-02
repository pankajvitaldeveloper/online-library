import { Link } from "react-router-dom";

export default function Home() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy"];
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        Welcome to the Online Library
      </h1>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Categories:</h2>
        <ul className="grid grid-cols-2 gap-4">
          {categories.map(cat => (
            <li key={cat}>
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
      <div className="bg-gray-50 rounded-lg p-6 shadow">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Popular Books</h2>
        <p className="text-gray-600">
          See popular books below or{" "}
          <Link to="/books" className="text-blue-600 hover:underline font-medium">
            browse all
          </Link>.
        </p>
      </div>
    </div>
  );
}