let quoteText = document.querySelector(".quote");
let authorName = document.querySelector(".name");
let soundBtn = document.querySelector(".sound");
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
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`) by (`${authorName.innerText}`);
  speechSynthesis.speak(utterance) // speak method of speechSynthesis speak the utterance
})

quoteBtn.addEventListener("click", randomQuote);
