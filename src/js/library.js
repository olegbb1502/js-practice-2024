import Book from './book.js';

const API_URL = 'http://localhost:5050/books'

export default class Library {
  async getAllBooks() {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error) {
        console.log(`getAllBooks Error: ${error}`);
        return error;
    }
  }

  async addBook(book) {
    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book),
        });
        return true;
    } catch(error) {
        console.log(`addBook Error: ${error}`);
        return error;
    }
  }

  async deleteBook(id) {
    try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    } catch (error) {
        console.log(`deleteBook Error: ${error}`);
        return error;
    }
  }
}
