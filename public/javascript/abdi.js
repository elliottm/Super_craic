<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>animated demo</title>
  <style>
  div {
    background: white;
    border: 1px solid #AAA;
    width: 80px;
    height: 80px;
    margin: 0 5px;
    float: left;
  }
  div.colored {
    background: red;
  }
  </style>
  <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
</head>
<body>
 
<button id="run">Run</button>
 
<div id="mover1"></div>
<div></div>
<div></div>
<div id="mover2"></div>
<div></div>
<div id="mover3"></div>
<div></div>
<div></div>
<div id="mover4"></div>
<div id="mover5"></div>
 
<script>
$( "#run" ).click(function() {
  $( "div:animated" ).toggleClass( "colored" );
});
 
function animateIt() {
  $( "#mover1" ).slideToggle( "fast", animateIt );
}
 
animateIt();
</script>
<script>
$( "#run" ).click(function() {
  $( "div:animated" ).toggleClass( "colored" );
});
 
function animateIt() {
  $( "#mover2" ).slideToggle( "slow", animateIt );
}
 
animateIt();
</script>
<script>
$( "#run" ).click(function() {
  $( "div:animated" ).toggleClass( "colored" );
});
 
function animateIt() {
  $( "#mover3" ).slideToggle( "fast", animateIt );
}
 
animateIt();
</script>
<script>
$( "#run" ).click(function() {
  $( "div:animated" ).toggleClass( "colored" );
});
 
function animateIt() {
  $( "#mover4" ).slideToggle( "fast", animateIt );
}
 
animateIt();
</script>
<script>
$( "#run" ).click(function() {
  $( "div:animated" ).toggleClass( "colored" );
});
 
function animateIt() {
  $( "#mover5" ).slideToggle( "slow", animateIt );
}
 
animateIt();
</script>
 
</body>
</html>