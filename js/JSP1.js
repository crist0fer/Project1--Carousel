





$(".formbox").click(function() 

{

  
  alert("Thank You, we look forward to giving you a quote.");
  
});


$(".thumbnail").click(function() {
  var screenSrc = $(this).attr('src');
  console.log( $(this).attr('src'));
  $('#screen').attr('src', 'some/othe/path');

});


