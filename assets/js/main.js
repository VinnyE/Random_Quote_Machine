var $quote = $('#quote');
var $author = $('#author');

var apiLink =   'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
var callBack = function(response) {

  $quote.text('“' + response.quoteText + '”');
  // If author value is empty, set as "Unknown".
  if (response.quoteAuthor) {
    $author.text("― " + response.quoteAuthor);
  } else {
    $author.text("― Unknown");
  };
};

var callApi = function() {
  $.getJSON(apiLink, callBack);
 };

var tweetQuote = function() {
  window.open("https://twitter.com/intent/tweet?text="+ $quote.text() + " " + $author.text())
 };

  var fadeQuote = function() {
    $('blockquote').animate({
    opacity: 0
    }, 50, function() {
    $(this).animate({
      opacity: 1
    }, 1000)
  });
};
  $('button.generate-quote').on('click', callApi).on('click', fadeQuote);
  $('#tweet-quote').on('click', tweetQuote);

  callApi();
