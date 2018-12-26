class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
  addToShelf() {
    const tableRow = document.createElement("tr");
    const titleCell = document.createElement("th");
    const authorCell = document.createElement("td");
    const idCell = document.createElement("td");
    const closeBtn = document.createElement("span");
    const tableBody = document.getElementById("table-body");
    titleCell.setAttribute("scope", "row");
    titleCell.textContent = this.title;
    authorCell.textContent = this.author;
    idCell.textContent = this.id;
    closeBtn.className = "close-btn btn btn-danger btn-lg";
    closeBtn.textContent = "X";

    closeBtn.addEventListener("click", this.removeFromShelf);
    idCell.appendChild(closeBtn);
    tableRow.appendChild(titleCell);
    tableRow.appendChild(authorCell);
    tableRow.appendChild(idCell);

    tableBody.appendChild(tableRow);
    const bookAddedMsg = new Message("Book successfully added!");
    const storage = new Storage(this.title, this.author, this.id);
    storage.addItemToStorage();
    bookAddedMsg.displaySuccess();
  }

  removeFromShelf(event) {
    const idToRemove = event.srcElement.parentNode.textContent;
    const newSt = idToRemove.slice(0, -1);

    event.srcElement.parentNode.parentNode.remove();
    const bookRemovedMsg = new Message("Book successfully removed!");
    const storage = new Storage(this.title, this.author, this.id);
    storage.removeItemFromStorage(newSt);
    bookRemovedMsg.displaySuccess();
  }
}
