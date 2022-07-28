let quoteText = document.querySelector(".quote");
let quoteBtn = document.querySelector("button");

// random quote function name

function randomQuote() {
  // getting random api/data and parsing it into javascript object
  fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });
}

quoteBtn.addEventListener("click", randomQuote);
