"use strict";

const container = document.querySelector(".container");
const inputForm = document.querySelector(".form");
const newBookBtn = document.querySelector(".newBook");
const closeFormBtn = document.getElementById("sign-up-close");
const library = document.querySelector(".library");

const openForm = function () {
  inputForm.classList.remove("hidden");
  inputForm.classList.add("flex");
  newBookBtn.classList.add("hidden");
  modal.classList.remove("hidden");
};

const closeForm = function () {
  inputForm.classList.add("hidden");
  inputForm.classList.remove("flex");
  newBookBtn.classList.remove("hidden");
  modal.classList.add("hidden");
};

newBookBtn.addEventListener("click", openForm);
closeFormBtn.addEventListener("click", closeForm);

let myLibrary = [];

function generateId() {
  return Math.random().toString().slice(-3);
}

function Book(title, author, genre, pages) {
  // this.isRead = isRead ? "Book on reading" : "Book is available";
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.id = generateId();
}

inputForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const pages = document.getElementById("pages").value;
  // const isRead = document.getElementById("checkbox").checked;

  const book = new Book(title, author, genre, pages);

  const addBookToLibrary = (book) => myLibrary.push(book);

  addBookToLibrary(book);

  const [lybcontent] = myLibrary.slice(-1);

  const contentHandler = function (content) {
    return `<div class="bookCard align-baseline gap-6 flex flex-col justify-center m-2 border-4 px-6 border-amber-600 book-background rounded-2xl text-center overflow-scroll">
    <div class="border-b-2 border-amber-600 pb-1">
    <h1 class="bookTitle font-extrabold text-2xl">${content.title}</h1>
    </div>
      <h2 class="author text-xl font-semibold">${content.author}</h2>
      <p class="pgNum text-xl font-medium">${content.genre}</p>
      <p class="pgNum text-xl font-medium">${content.pages}</p>
      <div class="prose prose-stone mt-0 flex flex-col items-center justify-center pt-0 font-semibold tracking-wider">
      <label for="checkboxBook" id="checkboxBook-label">(check weather book is read or not)</label>
      <input name="checkbox" type="checkbox" id="checkboxBook" class="mt-2 scale-150 rounded-lg p-8 px-4" />
    </div>
      <div>
      <button id=${content.id} class="removeBook remove-bookbtn">Remove book</button>
    </div>
    </div>`;
  };

  const htmlContent = contentHandler(lybcontent);

  container.insertAdjacentHTML("afterbegin", htmlContent);

  inputForm.reset();

  const removeBookbtn = document.querySelector(".removeBook");
  const bookCard = document.querySelector(".bookCard");

  removeBookbtn.addEventListener("click", function (event) {
    const clickedbuttonId = event.target.id;
    const clickedItem = myLibrary.find(function (item) {
      return item.id === clickedbuttonId;
    });
    myLibrary.splice(clickedItem, 1);
    bookCard.classList.add("hidden");
  });

  const checkboxForm = document.getElementById("checkboxForm");
  const checkboxLabelForm = document.getElementById("checkbox-label");
  const checkboxBook = document.getElementById("checkboxBook");
  const checkboxLabelBook = document.getElementById("checkboxBook-label");

  checkboxForm.addEventListener("change", function () {
    if (this.checked) {
      checkboxLabelForm.textContent = "Book is available.";
    } else {
      checkboxLabelForm.textContent = "Book is not available.";
    }
  });

  checkboxBook.addEventListener("change", function () {
    if (this.checked) {
      checkboxLabelBook.textContent = "Read.";
    } else {
      checkboxLabelBook.textContent = "Not read yet.";
    }
  });
});
