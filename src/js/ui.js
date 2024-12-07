export default class UI {
    static displayBooks(books, error) {
      const bookList = document.getElementById('book-list');
      bookList.innerHTML = '';
      if (error) {
        bookList.innerHTML = `<h3 class="text-lg text-center font-bold">Помилка отримання даних: ${JSON.stringify(error)}</h3>`;
        return;
      }
      if (books.length === 0) {
        bookList.innerHTML = '<h3 class="text-lg text-center font-bold">Бібліотека порожня</h3>';
        return;
      }
      books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.innerHTML = `
          <div class="p-4 bg-white shadow-md">
            <h3 class="text-lg font-bold">${book.title}</h3>
            <p>Автор: ${book.author}</p>
            <p>Рейтинг: ${book.rating} ⭐</p>
            <button class="delete-book bg-red-500 text-white p-2 mt-2" data-id="${book.id}">Видалити</button>
          </div>
        `;
        bookList.appendChild(bookDiv);
      });
    }
  }
  