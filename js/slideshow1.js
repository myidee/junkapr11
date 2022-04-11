//Global variables visible to all code in page.
//Subscript of first image to show.
var subscript = 0;

//Number of seconds for each picture to show.
var pictime = 5;

//List all of your image filenames. Filenames don't have to follow any pattern.
var images = new Array();
images[0] = 'pix3/candle.jpg';
images[1] = 'pix3/chip.jpg';
images[2] = 'pix3/fire.png';
images[3] = 'pix3/paint.png';
images[4] = 'pix3/water.png';

//Show the next image in the array.
function nextimg() {
  //Calculate next subscript (uses ternary operator).
  subscript = subscript == images.length - 1 ? 0 : subscript + 1;
  var imagefile = images[subscript];
  //Find img tag and change its src= attribute.
  var img = document.getElementById('slideimg');
  img.src = imagefile;
}
//Make sure everything is loaded before starting timer.
window.onload = function () {
  var stimer = setInterval('nextimg()', pictime * 1000);
};
