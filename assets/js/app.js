var headHTML = document.querySelector('head');
var quote = document.getElementById('quote');
var author = document.getElementById('author');

// On initial page load, use JSONP to access data from quote API.
// When 'New Quote' button is clicked, remove old script, insert new script.
// Query string in URL includes function call.
function apiScript() {
  if (headHTML.hasChildNodes('script')) {
    var lastChild = document.querySelector('head').lastChild;
    headHTML.removeChild(lastChild);
  }

  var script = document.createElement('script');
  script.src = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=parseJSONP"
  headHTML.appendChild(script);
}
apiScript();

// Use data from the object passed by the JSONP call.
// If author value is empty, use "Unknown".
function parseJSONP(jsonp) {
  quote.textContent = '“' + jsonp.quoteText + '”';
  if (jsonp.quoteAuthor) {
    author.textContent ="― " + jsonp.quoteAuthor;
  } else {
    author.textContent = "― Unknown";
  };
}

// When link is clicked, set the href attribute to new link + quote content.
function tweetQuote() {
  var tweetQuote = document.getElementById('tweet-quote');
  tweetQuote.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + quote.textContent + " " + author.textContent);
}
