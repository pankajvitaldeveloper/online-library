import { createSlice } from '@reduxjs/toolkit';

// This slice manages the state for the books in the online library.
// It includes an initial list of books and a reducer to add new books.

const initialState = {
  books: [
    // Predefined list of books with details for demonstration and initial display
    {
      id: 1,
      title: "Dune",
      author: "Frank Herbert",
      description: "A science fiction classic set on the desert planet Arrakis.",
      category: "Sci-Fi",
      rating: 4.8
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel about surveillance and totalitarianism.",
      category: "Fiction",
      rating: 4.6
    },
    {
      id: 3,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      description: "A brief history of humankind.",
      category: "Non-Fiction",
      rating: 4.7
    },
    {
      id: 4,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description: "A fantasy adventure before the Lord of the Rings.",
      category: "Fantasy",
      rating: 4.9
    },
    {
      id: 5,
      title: "The Martian",
      author: "Andy Weir",
      description: "An astronaut is stranded on Mars and must survive alone.",
      category: "Sci-Fi",
      rating: 4.5
    },
    {
      id: 6,
      title: "Educated",
      author: "Tara Westover",
      description: "A memoir about growing up in a survivalist family.",
      category: "Non-Fiction",
      rating: 4.4
    },
    {
      id: 7,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A classic novel about the American dream and the roaring twenties.",
      category: "Fiction",
      rating: 4.4
    },
    {
      id: 8,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A novel about racial injustice and moral growth in the American South.",
      category: "Fiction",
      rating: 4.8
    },
    {
      id: 9,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      description: "The beginning of the magical adventures of Harry Potter.",
      category: "Fantasy",
      rating: 4.9
    },
    {
      id: 10,
      title: "A Game of Thrones",
      author: "George R.R. Martin",
      description: "The first book in the epic fantasy series A Song of Ice and Fire.",
      category: "Fantasy",
      rating: 4.7
    }
  ]
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // Adds a new book to the state with a unique id based on the current timestamp
    addBook: (state, action) => {
      state.books.push({ id: Date.now(), ...action.payload });
    }
  }
});

// Export the addBook action for use in components
export const { addBook } = booksSlice.actions;
// Export the reducer to be included in the Redux store
export default booksSlice.reducer;
