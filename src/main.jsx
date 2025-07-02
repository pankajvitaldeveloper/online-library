import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Entry point for the React application.
// The Provider component makes the Redux store available to all components in the app.
// This allows components to access and update global state managed by Redux.

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
