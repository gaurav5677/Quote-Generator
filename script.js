// using Asyncronas fetch we  will fetch random quotes

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
// Quotes form API

async function getQuote() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

  // (  '  ?  '  ) is used to add Query String
  try {
    const response = await fetch(proxyUrl + apiUrl);
    // because we have Async this const response will not going to set until the await fetch(apiUrl) finish fetching
    const data = await response.json();
    // if Author is bland , add 'Unknow';
    if (data.quoteAuthor === "") {
      authorText.innerText = "Unknown";
    } else {
      authorText.innerText = data.quoteAuthor;
    }
    // this data will not be set until it finishes  returning const response in jspon format
    if (data.quoteText.lenght > 120) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }

    quoteText.innerText = data.quoteText;
  } catch (error) {
    //  getQuote();
  }
}

//  On load

getQuote();
