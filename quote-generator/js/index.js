$(document).ready(function() {

  var quote, author;

  function getNewQuote() {
    $.ajax({

      url: 'https://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'

      },
      success: function(res) {
        console.log(res);
        quote = res.quoteText;
        author = res.quoteAuthor;

        $('#quote').text(quote);
        
        if(author){
            $('#author').text(" - " + author);
        }else{
           $('#author').text(" - Anonymous");
        }
      }
    });
  }

  getNewQuote();
  
  $('#nextquotebtn').on('click', function(event){
    event.preventDefault();
    
    getNewQuote();
  })
  
   $('#tweetquotebtn').on('click', function(event){
    event.preventDefault();
    
     if(quote.length > 140) {
       
       quote = quote.substr(0, 140);
     }
    window.open('https://twitter.com/intent/tweet?text='+quote+' - '+author);
  })
    
  
});