/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes=[

  {
    quote: "I was born to dictate, never follow orders",
    source: "Jay-Z",
    song: "U Don't Know",
    year: 2001,
  },

  {
    quote: "A man that don't take care his family can't be rich",
    source: "Jay-Z",
    song: "Family Feud",
    year: 2017,
  },

  {
    quote: "Generational wealth, that's the key",
    source: "Jay-Z",
    song: "Legacy",
    year: 2017,
  },
  {
    quote: "Nobody built like you, you design yourself",
    source: "Jay-Z",
    song: "A Dream",
    year: 2002,
  },
  {
    quote: "Standing back from situations, gives you the perfect view",
    source: "Jay-Z",
    song: "Anything",
    year: 1999,
  },


]
 
  

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
 let randomNumber = Math.floor(Math.random() * (quotes.length));
return quotes [randomNumber];

}
  



/***
 * `printQuote` function
***/

function printQuote() {
 
  let message = "";   
  let outCome = getRandomQuote(quotes);
  message = "<p class='quote'>" + outCome.quote + "</p>";
  message += "<p class='source'>" + outCome.source; 
  message += "<span class='song'>, " + outCome.song + "</span>";
  message += "<span class='year'>" + outCome.year + "</span>"
  message += "</p>";

  
  document.getElementById('quote-box').innerHTML = message; 
   
  }

  printQuote();




  /***
  * click event listener for the print quote button
  * DO NOT CHANGE THE CODE BELOW!!
  ***/

  document.getElementById('load-quote').addEventListener("click", printQuote, false);
