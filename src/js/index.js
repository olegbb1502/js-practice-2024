import '../css/styles.css';

import Library from './library.js';
import UI from './ui.js';

const library = new Library();

// Відображення книг при завантаженні сторінки
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const books = await library.getAllBooks();
        console.log(books);
        
        UI.displayBooks(books);
    } catch (error) {
        UI.displayBooks(null, error);
    }
});

// Додавання книги
document.getElementById('addBook').addEventListener('click', async () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const rating = document.getElementById('rating').value;

  if (title && author && rating) {
    const book = { title, author, rating };
    if (rating < 1) {
        book.rating = 1
    } else if (rating > 5) {
        book.rating = 5;
    }
    try {
        const addBookHandler = await library.addBook(book);
        if (addBookHandler) {
            const books = await library.getAllBooks();
            UI.displayBooks(books);
        }
    } catch(error) {
        UI.displayBooks(null, error);
    }
  }
});

// Видалення книги
document.getElementById('book-list').addEventListener('click', async (e) => {
  if (e.target.classList.contains('delete-book')) {
    const id = e.target.getAttribute('data-id');
    await library.deleteBook(id);
    const books = await library.getAllBooks();
    UI.displayBooks(books);
  }
});

// Пошук книг
document.getElementById('searchInput').addEventListener('input', async (e) => {
  const query = e.target.value.toLowerCase();
  try {
    const books = await library.getAllBooks();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
    UI.displayBooks(filteredBooks);
  } catch(error) {
    UI.displayBooks(null, error);
  }
});
