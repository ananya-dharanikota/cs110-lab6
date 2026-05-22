function BookList({
    books,
    API_URL,
    loadBooks,
    setEditingBook
}) {

    async function deleteBook(id) {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        loadBooks();
    }

    return (
        <div>
            {books && books.map(book => (
                <div key={book._id} className="book-card">
                    <h3>{book.title}</h3>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>ISBN:</strong> {book.isbn}</p>
                    <button onClick={() => setEditingBook(book)}>
                        Edit
                    </button>

                    <button onClick={() => deleteBook(book._id)}>
                        Delete
                    </button>

                </div>
            ))}
        </div>
    );
}

export default BookList;