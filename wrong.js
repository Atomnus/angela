
setTimeout(fade_in, 6000);

function fade_in() {
  $("p").fadeIn();
  
  setTimeout(fade_out, 2000);
}
function fade_out() {
  $("p").fadeOut();
}
