let quotes = [];
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const quoteButton = document.getElementById("new-quote");
const quoteTwitter = document.getElementById("twitter");
console.log(quoteAuthor);

const generateQuote = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = quote.text ? quote.text : "Could not get the quote";
  quoteAuthor.textContent = quote.author
    ? quote.author
    : "Could not get the author";
};

// Get quotes from API
const getQuotes = async () => {
  const API_URL =
    " https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(API_URL);
    quotes = await response.json();
    generateQuote();
  } catch (error) {
    console.log(error);
  }
};

quoteButton.addEventListener("click", generateQuote);

quoteTwitter.addEventListener("click", () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${quoteAuthor.textContent}`;
  window.open(twitterUrl, "_blank");
});

getQuotes();
