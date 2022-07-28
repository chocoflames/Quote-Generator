let quoteText = document.querySelector(".quote");
let authorName = document.querySelector(".name");
let quoteBtn = document.querySelector("button");

// random quote function name

function randomQuote() {
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading Quote..."
  // getting random api/data and parsing it into javascript object
  fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
    //   console.log(result);
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBtn.innerText = "New Quote"
    });
}

quoteBtn.addEventListener("click", randomQuote);
