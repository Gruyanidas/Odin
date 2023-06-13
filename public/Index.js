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

function Book(title, author, genre, pages, isRead) {
  this.isRead = isRead ? "Book on reading" : "Book is available";
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
}

inputForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("checkbox").checked;

  const book = new Book(title, author, genre, pages, isRead);

  const addBookToLibrary = (book) => myLibrary.push(book);

  addBookToLibrary(book);

  const [lybcontent] = myLibrary.slice(-1);

  const contentHandler = function (content) {
    return `<div class="bookCard align-baseline gap-4 flex flex-col justify-center m-3 border-4 w-1/6 p-8  min-h-40 border-green-600 rounded-2xl text-center overflow-scroll">
    <div class="border-b-2 border-green-400 pb-1">
    <h1 class="bookTitle font-extrabold text-2xl">${content.title}</h1>
    </div>
      <h2 class="author text-lg font-semibold">${content.author}</h2>
      <p class="pgNum text-base font-medium">${content.genre}</p>
      <p class="pgNum text-base font-medium">${content.pages}</p>
      <p class="status font-medium">${content.isRead}</p>
      <div>
      <button id="remove" class="removeBook flex flex-row items-center justify-center rounded-lg text-sm font-semibold hover:opacity-70 transition-all duration-500 w-full h-6 bg-amber-500 px-4 py-6">Remove book</button>
    </div>
    </div>`;
  };

  const htmlContent = contentHandler(lybcontent);

  container.insertAdjacentHTML("afterbegin", htmlContent);

  // inputForm.reset();

  const removeBookbtn = document.querySelector(".removeBook");
  const bookCard = document.querySelector(".bookCard");

  removeBookbtn.addEventListener("click", function (event) {
    bookCard.classList.add("hidden");
    console.log(event.target);
  });
  console.log(myLibrary);
});

// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array.

// console.log(myLibrary);

// const Hobit = new Book(`The Hobbit`, `J.R.R Tolkien`, 295, true);
// console.log(Hobit);

// console.log(Hobit.info());

// console.log(Hobit instanceof Book);

// console.log(Object.getPrototypeOf(Hobit));
// console.log(Hobit.valueOf());

// console.log(Hobit.__proto__);
// console.log("bzv");

// const numbers = {
//   numberA: 5,
//   numberB: 10,
//   sum: function() {
//     console.log(this === numbers); // => true

//     const calculate = () => {
//       console.log(this === numbers); // => true
//       return this.numberA + this.numberB;
//     }
//     return calculate();
//   }
// };

// console.log(numbers.sum()); // => 15

// function Pet(type, legs) {
//   this.type = type;
//   this.legs = legs;

//   this.logInfo = function() {
//     console.log(this === myCat); // => false
//     console.log(`The ${this.type} has ${this.legs} legs`);
//   }
// }

// const myCat = new Pet('Cat', 4);
// console.log(myCat.logInfo());
// // logs "The undefined has undefined legs"
// // or throws a TypeError in strict mode
// const catlog = myCat.call(logInfo);

// setTimeout(catlog, 1000);
