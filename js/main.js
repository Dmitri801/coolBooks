const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const bookIdInput = document.querySelector("#bookId");
const form = document.querySelector("#submit");
const tableBody = document.getElementById("table-body");

// Page loads - check local storage
document.addEventListener("DOMContentLoaded", () => {
  localStorage = window.localStorage;
  let storage = new Storage();
  if (localStorage.length > 0) {
    let books = storage.getAllFromStorage();

    books.forEach(book => {
      const tableRow = document.createElement("tr");
      const titleCell = document.createElement("th");
      const authorCell = document.createElement("td");
      const idCell = document.createElement("td");
      const closeBtn = document.createElement("span");
      const tableBody = document.getElementById("table-body");
      titleCell.setAttribute("scope", "row");
      titleCell.textContent = book.title;
      authorCell.textContent = book.author;
      idCell.textContent = book.id;
      closeBtn.className = "close-btn btn btn-danger btn-lg";
      closeBtn.textContent = "X";
      let newBook = new Book(book.title, book.author, book.id);
      closeBtn.addEventListener("click", newBook.removeFromShelf);
      idCell.appendChild(closeBtn);
      tableRow.appendChild(titleCell);
      tableRow.appendChild(authorCell);
      tableRow.appendChild(idCell);
      tableBody.appendChild(tableRow);
    });
  }
});

// Form Submitted

form.addEventListener("submit", e => {
  e.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;
  const bookId = bookIdInput.value;
  let newBook = new Book(title, author, bookId);
  if (title === "" || author === "" || bookId === "") {
    const newError = new Message("Please make sure all fields are entered");
    newError.displayError();
  } else {
    newBook.addToShelf();
    titleInput.value = "";
    authorInput.value = "";
    bookIdInput.value = "";
  }
});
