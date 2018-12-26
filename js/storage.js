class Storage {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
  getAllFromStorage() {
    let books = [],
      keys = Object.keys(window.localStorage),
      i = keys.length;

    while (i--) {
      const book = window.localStorage.getItem(keys[i]);
      books.push(JSON.parse(book));
    }

    return books;
  }
  addItemToStorage() {
    const newBook = {
      title: this.title,
      author: this.author,
      id: this.id
    };
    window.localStorage.setItem(this.id, JSON.stringify(newBook));
  }

  removeItemFromStorage(id) {
    window.localStorage.removeItem(id);
  }
}
