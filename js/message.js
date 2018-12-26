class Message {
  constructor(message) {
    this.message = message;
  }

  displayError() {
    const alertDiv = document.createElement("div");
    const alertContainer = document.querySelector("#alert-container");
    alertDiv.className = "alert alert-danger text-center";
    alertDiv.textContent = this.message;
    alertContainer.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.remove();
    }, 3000);
  }

  displaySuccess() {
    const alertDiv = document.createElement("div");
    const alertContainer = document.querySelector("#alert-container");
    alertDiv.className = "alert alert-success text-center";
    alertDiv.textContent = this.message;
    alertContainer.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.remove();
    }, 3000);
  }
}
