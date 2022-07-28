let quoteText = document.querySelector(".quote");
let authorName = document.querySelector(".name");
let soundBtn = document.querySelector(".sound");
let copyBtn = document.querySelector(".copy");
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
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading")
    });
}

soundBtn.addEventListener("click", () => {
  // SpeechSynthesisUtterance is a web speech api that represent a speech request
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
  speechSynthesis.speak(utterance) // speak method of speechSynthesis speak the utterance
})

copyBtn.addEventListener("click", () => {
  // copying the quote text on copybtn click
  // writeText() property writes the specified text string to the system clipboard
  navigator.clipboard.writeText(quoteText.innerText)
})

quoteBtn.addEventListener("click", randomQuote);
