
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

function keeydown() {

$('body').on('keydown keyup',function(r){
      var color = r.type=="keydown" ? 'red' : 'white' ;
      if(r.which==82){
          $(this).css({background: color});  
      }
    });
};