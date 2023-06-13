"use strict";

const container = document.querySelector(".container");
const inputForm = document.querySelector(".form");
const newBookBtn = document.querySelector(".newBook");
const closeFormBtn = document.getElementById("sign-up-close");

const openForm = function () {
  inputForm.classList.remove("hidden");
  newBookBtn.classList.add("hidden");
};

const closeForm = function () {
  inputForm.classList.add("hidden");
  newBookBtn.classList.remove("hidden");
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
    return `<div class="bookCard align-baseline gap-4 flex flex-col justify-center m-3 border-4 p-8  min-h-40 border-green-600 rounded-2xl text-center overflow-scroll">
    <div class="border-b-2 border-green-400 pb-1">
    <h1 class="bookTitle font-extrabold text-2xl">${content.title}</h1>
    </div>
      <h2 class="author text-lg font-semibold">${content.author}</h2>
      <p class="pgNum text-base font-medium">${content.genre}</p>
      <p class="pgNum text-base font-medium">${content.pages}</p>
      <div class="prose prose-stone mt-0 flex flex-col items-center justify-center pt-0 font-semibold tracking-wider">
      <label for="checkboxBook" id="checkboxBook-label"></label>
      <input name="checkbox" type="checkbox" id="checkboxBook" class="mt-2 scale-150 rounded-lg p-8 px-4" />
    </div>
      <div>
      <button id=${content.id} class="removeBook flex flex-row items-center justify-center rounded-lg text-sm font-semibold hover:opacity-70 transition-all duration-500 w-full h-6 bg-amber-500 px-4 py-6">Remove book</button>
    </div>
    </div>`;
  };

  const htmlContent = contentHandler(lybcontent);

  container.insertAdjacentHTML("afterbegin", htmlContent);

  // inputForm.reset();

  const removeBookbtn = document.querySelector(".removeBook");
  const bookCard = document.querySelector(".bookCard");

  removeBookbtn.addEventListener("click", function (event) {
    const clickedbuttonId = event.target.id;
    const clickedItem = myLibrary.find(function (item) {
      return item.id === clickedbuttonId;
    });
    myLibrary.splice(clickedItem, 1);
    console.log(myLibrary);
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

