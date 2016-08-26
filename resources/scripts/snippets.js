var rgb = shuffle([1,5,3]);
var glbQuote = "";
var glbAuthor = "";

$(document).ready(function() { 
 getQuote();
 setColor();
});

$(".fa-facebook").on("click", function(){
    var win = window.open('http://www.facebook.com/sharer/sharer.php?&t=' + glbQuote + '- ' + glbAuthor, '_blank');
if (win) {
    //Browser has allowed it to be opened
    win.focus();
} else {
    //Browser has blocked it
    alert('Please allow popups for this website');
}
  
  //https://twitter.com/intent/tweet?text=glbQuote
});

$(".fa-twitter").on("click", function(){
  
  var win = window.open('https://twitter.com/intent/tweet?text=' + glbQuote + '- ' + glbAuthor, '_blank');
if (win) {
    //Browser has allowed it to be opened
    win.focus();
} else {
    //Browser has blocked it
    alert('Please allow popups for this website');
}
  
  //https://twitter.com/intent/tweet?text=glbQuote
});

$("#quote-button").on("click", function(){
  getQuote();
  setColor();
});

   function setColor() {
   var red = Math.floor((Math.random() * (255/rgb[0])) + 1);
   var green = Math.floor((Math.random() * (255/rgb[1])) + 1);
   var blue = Math.floor((Math.random() * (255/rgb[2])) + 1);
  shuffle(rgb);
     $("#quote-text").css('color', 'rgb(' + red + ',' + green + ',' + blue + ')');
     
     
          $("#quote-author").css('color', 'rgb(' + red + ',' + green + ',' + blue + ')');
     $("#quote-button").css('background', 'rgb(' + red + ',' + green + ',' + blue + ')');
     $(".fa-square-o").css('color', 'rgb(' + red + ',' + green + ',' + blue + ')');
     $(".fa-square-o").css('background', 'rgb(' + red + ',' + green + ',' + blue + ')');
$("body").css('background', 'rgb(' + red + ',' + green + ',' + blue + ')');
   }

   function getQuote() {
     var data; 
  $.ajax({ 
    type: 'GET',
    url: 'http://quotes.stormconsultancy.co.uk/random.json?callback=?',
    data: data,
    crossDomain: true,
    async: false,
    dataType: 'json', 
    success: function(data) {
    var quote = data.quote; 
    var author = data.author; 
    glbQuote = quote;
    glbAuthor = author;
    
    $('#quote-text').html('<i class="fa fa-quote-left" aria-hidden="true"></i>  ' + quote);
    $('#quote-author').text('- ' + author);
  }
  });
   };

    function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  } 
  console.log(array);
  return array;
}