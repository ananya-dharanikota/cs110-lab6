# Book Management System

A full-stack web application for managing a book collection. Users can add, view, edit, and delete books, with all data persisted in MongoDB Atlas.

## Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Frontend  | React 18, Vite          |
| Backend   | Node.js, Express.js     |
| Database  | MongoDB Atlas (Mongoose)|

## Project Structure

```
book-management-app/
├── backend/
│   ├── config/db.js          # MongoDB connection
│   ├── controllers/
│   │   └── bookController.js # CRUD logic
│   ├── models/
│   │   └── Book.js           # Mongoose schema
│   ├── routes/
│   │   └── bookRoutes.js     # API routes
│   ├── .env                  # Environment variables
│   └── server.js             # Express entry point
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── BookForm.jsx  # Add/edit form
    │   │   └── BookList.jsx  # Book cards grid
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    └── vite.config.js
```

## API Endpoints

| Method | Endpoint          | Description        |
|--------|-------------------|--------------------|
| GET    | /api/books        | Get all books      |
| GET    | /api/books/:id    | Get a single book  |
| POST   | /api/books        | Create a new book  |
| PUT    | /api/books/:id    | Update a book      |
| DELETE | /api/books/:id    | Delete a book      |

## Setup & Deployment

### 1. MongoDB Atlas

1. Create a free account at [mongodb.com](https://www.mongodb.com)
2. Create a new project and a free-tier cluster
3. Under **Database Access**, create a user with read/write permissions
4. Under **Network Access**, add your IP address (or `0.0.0.0/0` to allow all)
5. Click **Connect → Drivers** and copy the connection string

### 2. Backend

```bash
cd backend
npm install
```

Edit `.env` with your MongoDB connection string:
```
PORT=5000
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/booksdb?retryWrites=true&w=majority
```

Start the server:
```bash
npm run dev      # development (nodemon)
npm start        # production
```

Backend runs at: `http://localhost:5000`

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:3000`

The Vite dev server proxies `/api` requests to the backend automatically, so no CORS issues during development.

---

## Additional Features Implemented

### Feature 1: Duplicate ISBN Detection with User-Friendly Error Messages

**Problem:** The original requirement noted that duplicate ISBNs would throw a raw error to the console with no user feedback.

**Solution:** The backend `bookController.js` explicitly checks for duplicate ISBNs before attempting to insert (and also handles the MongoDB `error.code === 11000` duplicate key error as a fallback). It returns a structured JSON error message. The frontend `BookForm.jsx` reads `response.ok` — if false, it displays the server's `data.message` in a styled red alert box directly in the UI, so the user immediately knows what went wrong without opening the browser console.

### Feature 2: Extended Book Fields

**Problem:** The base schema only stored `isbn`, `title`, and `author`.

**Solution:** The Book model was expanded to include `publishedDate`, `publisher`, and `pages`. The form and book cards both display these fields. All new fields are optional so existing workflows aren't broken.

---

## Notes

- Frontend and backend run as separate processes (two terminal windows).
- If deploying to production, set `MONGO_URI` as an environment variable on your host (never commit `.env` to Git).
- Add `.env` and `node_modules/` to `.gitignore` before pushing to GitHub.
