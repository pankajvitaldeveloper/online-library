# 📚 Online Library System

A simple online library system built with **React**, **React Router**, and **Redux**.  
This project demonstrates routing, state management, dynamic filtering, form validation, and basic CRUD functionality — all with clean, maintainable code.

---

## 🚀 Features

✅ **Home Page**
- Welcoming landing page
- List of book categories (e.g., Fiction, Non-Fiction, Sci-Fi, Fantasy)
- Popular books preview
- Easy navigation with a top nav bar

✅ **Browse Books Page**
- Browse all books or filter by category
- Dynamic routing (`/books/:category`) 
- Search books by title or author
- Link to detailed book pages

✅ **Book Details Page**
- View full details of a selected book (title, author, description, rating)
- Back to Browse button for easy navigation

✅ **Add Book Page**
- Add a new book with a simple form
- Form validation for all fields
- Uses **Redux** to manage books state
- After adding, redirects back to Browse Books with the new book visible

✅ **404 Page**
- User-friendly *Page Not Found* for undefined routes
- Link back to the Home page

---

## ⚙️ Technologies Used

- **React** (Vite)
- **React Router DOM**
- **Redux Toolkit**
- **React Redux**

---

## 📦 Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/pankajvitaldeveloper/online-library.git
   cd online-library
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📝 Example Books Data

This project includes 10 dummy books covering multiple categories.  
Add more books through the **Add Book** form to test Redux state updates.

---

## 👨‍💻 Author

**Your Name**  
[Your LinkedIn](#) | [Your GitHub](#)

---