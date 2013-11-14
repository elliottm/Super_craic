
function slide() {
  $( "p" ).click(function() {
  $( this ).slideUp();
});
};

function homepage() {

$.get('/', function(data) {
        $(data).appendTo("#mainpage")
        });

}