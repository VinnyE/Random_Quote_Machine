function apiScript() {
  var bodyHTML = document.querySelector('body');
  var script = document.createElement('script');
  script.src = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=parseJSONP"
  bodyHTML.appendChild(script);
}
apiScript();

function parseJSONP(jsonp) {
  document.getElementById('quote').innerHTML = jsonp.quoteText;
  document.getElementById('author').innerHTML = jsonp.quoteAuthor;
}
