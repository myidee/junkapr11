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

//Fade out the current image, then pause.
function nextimg() {
  var imgtag = document.getElementById('slideimg');
  //Apply the fadeout style class.
  imgtag.className = 'fadeout';
  //wait 250ms, then get the new image.
  setTimeout('newimg()', 250);
}

//Calculate and show the next image.
function newimg() {
  //Calculate next image subscript number.
  subscript = subscript == images.length - 1 ? 0 : subscript + 1;
  //Set next image filename appropriate image name in array.
  var imagefile = images[subscript];
  //Set the image tag's src= and classname= attributes.
  var imgtag = document.getElementById('slideimg');
  imgtag.src = imagefile;
  imgtag.className = 'fadein';
}

//Make sure everything is loaded before starting timer.
window.onload = function () {
  var stimer = setInterval('nextimg()', pictime * 1000);
};
