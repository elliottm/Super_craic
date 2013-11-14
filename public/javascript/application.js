$(function() {
	$( "#the_key" ).click(function() {
	  $("#main").animate({opacity: 1}, 3000);
	  $("#the_key").animate({opacity: 0}, 3000);
	});
});  