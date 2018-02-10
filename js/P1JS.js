$(document).ready(function() {
    $(".right.carousel-control").on("click",function (e) {
      var currentIndex = $(".preview").data("current-index");
      var nextIndex = currentIndex +1;
               
      var nextThumbnail = $( $(".thumbnail img").get(nextIndex) );
      $(".preview").prop("src", nextThumbnail.data("src"));
      $(".preview").data("current-index", nextIndex);
     
     
    });
    
    
     $(".left.carousel-control").on("click",function (e) {
      var currentIndex = $(".preview").data("current-index");
      var previousIndex = currentIndex -1;
               
      var previousThumbnail = $( $(".thumbnail img").get(previousIndex) );
      $(".preview").prop("src", previousThumbnail.data("src"));
      $(".preview").data("current-index", previousIndex);
     
     
    });
	
	
	$("#thumbnails img").on("click",function (e) {
  		var gallerythumbnail = $(this);
  		var currentIndex = $(".thumbnail img").index( gallerythumbnail );
  		$(".preview").prop("src", gallerythumbnail.data("src"));
  		$(".preview").data("current-index", currentIndex);
  		
	});
});

$(".right.carousel-control").on("click",function (e) {
      
     
     
     
     
});

$(".formbox").click(function() 

{

  
  alert("Thank You, we look forward to giving you a quote.");
  
});
