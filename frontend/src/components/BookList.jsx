function BookList({ books, API_URL, loadBooks, setEditingBook }) {
  async function handleMarkRead(id, currentRead) {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read: !currentRead }),
    });
    loadBooks();
  }

  async function deleteBook(id) {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    loadBooks();
  }

  return (
    <div>
      {books &&
        books.map((book) => (
          <div key={book._id} className="book-card">
            <h3>{book.title}</h3>
            <p>
              <strong>Author:</strong> {book.author}
            </p>
            <p>
              <strong>ISBN:</strong> {book.isbn}
            </p>
            <button onClick={() => setEditingBook(book)}>Edit</button>

            <button onClick={() => deleteBook(book._id)}>Delete</button>

            <button onClick={() => handleMarkRead(book._id, book.read)}>
              {book.read ? "✅ Read" : "Bookmark as Read"}
            </button>
          </div>
        ))}
    </div>
  );
}

export default BookList;
