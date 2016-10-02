$(document).ready(function() {

  var counter=1;
  $("#quotebutton").on("click", function() {
    $.ajax({
      url: 'https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
      success: function(data) {
        $('.quotemessage').html(data.quoteText + "<br> - " + data.quoteAuthor);
      },
      cache: false
    })
    console.log(counter)
    $(".quotecount").html(counter);
    counter++;
    console.log(counter);
  });
})