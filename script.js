const quotes = [
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { text: "What we think, we become.", author: "Buddha" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" }
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selected = quotes[randomIndex];
  
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");

  // Fade-out effect before change
  quoteEl.style.opacity = 0;
  authorEl.style.opacity = 0;

  setTimeout(() => {
    quoteEl.innerText = selected.text;
    authorEl.innerText = `— ${selected.author}`;
    quoteEl.style.opacity = 1;
    authorEl.style.opacity = 1;
  }, 300);
}
