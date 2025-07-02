import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';

// This file sets up the Redux store for the application.
// It combines all reducers (currently only booksReducer) and configures the store.
// The store is used to manage global state across the app.

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
