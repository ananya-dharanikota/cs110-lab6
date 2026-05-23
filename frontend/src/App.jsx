import { useEffect, useState } from "react";

import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const API_URL = "http://localhost:5000/api/books";
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  async function loadBooks() {
    const response = await fetch(API_URL);
    const data = await response.json();
    setBooks(data);
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div className="container">
      <h1>Book Management App</h1>
      <BookForm
        API_URL={API_URL}
        loadBooks={loadBooks}
        editingBook={editingBook}
        setEditingBook={setEditingBook}
      />

      <BookList
        books={books}
        API_URL={API_URL}
        loadBooks={loadBooks}
        setEditingBook={setEditingBook}
      />
    </div>
  );
}

export default App;
