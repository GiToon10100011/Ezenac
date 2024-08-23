const display = (quotes) => {
  const result = document.querySelector("#result");
  let ranIdx = Math.floor(Math.random()* 29) ;
  result.querySelector(".quote").innerText = quotes.quotes[ranIdx].quote;
  result.querySelector(".author").innerText = quotes.quotes[ranIdx].author;
};

const init = async () => {
  const response = await fetch("https://dummyjson.com/quotes");

  const quotes = await response.json();
  display(quotes);
};

init();
