function resize() {
var width = document.images[0].width+6;
var height = document.images[0].height+50-0;
if (width > 750) width = 750;
if (height > 550) height = 550;
if (document.images[0]) window.resizeTo(width, height);
}
