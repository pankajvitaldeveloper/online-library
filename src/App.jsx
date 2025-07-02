import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./components/NotFound";
import "./index.css"; 

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:category?" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
