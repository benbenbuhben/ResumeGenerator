'use strict';

var portraits = ['http://via.placeholder.com/250x200', 'http://via.placeholder.com/250x200', 'http://via.placeholder.com/250x200', 'http://via.placeholder.com/250x200'];

var bioH = document.getElementById('teamN');
var bioP = document.getElementById('about-me');
var imgPortraits = [];



var canvasWidth = 960;
var canvasHeight = 500;
var imgSize0 = 180;
var imgSize1 = 180;
var imgSize2 = 180;
var imgSize3 = 180;

var mouseX;
var mouseY;




var canvas = document.getElementById('about-us');
var ctx = canvas.getContext('2d');
function draw() {ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawPortraits();
  window.requestAnimationFrame(draw);
}




var picOffset = 50;
function drawPortraits(){

  for (var i in portraits) {
    imgPortraits[i] = new Image();
    imgPortraits[i].src = portraits[i];
  }
  ctx.drawImage(imgPortraits[0], 0, 0, imgSize0, imgSize0, 380 + picOffset / 2 , 50 + picOffset / 2, imgSize0 - picOffset, imgSize0 - picOffset);
  ctx.drawImage(imgPortraits[1], 0, 0, imgSize1, imgSize1, 105 + picOffset / 2 , 100 + picOffset / 2, imgSize1 - picOffset, imgSize1 - picOffset);
  ctx.drawImage(imgPortraits[2], 0, 0, imgSize2, imgSize2, 660 + picOffset / 2 , 100 + picOffset / 2, imgSize2 - picOffset, imgSize2 - picOffset);
  ctx.drawImage(imgPortraits[3], 0, 0, imgSize3, imgSize3, 205 + picOffset / 2 , 280 + picOffset / 2, imgSize3 - picOffset, imgSize3 - picOffset);

}






function getCursorPosition(event){
  var rect = canvas.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
}



function displayBio(){
  if(mouseX > 125 && mouseX < 275 && mouseY > 126 && mouseY < 273){
    bioH.textContent = 'Ben';
    bioP.textContent = 'Info' ;


  }else if (mouseX > 225 && mouseX < 370 && mouseY > 306 && mouseY < 455){
    bioH.textContent = 'Noah';
    bioP.textContent = 'info';


  }else if (mouseX > 405 && mouseX < 550 && mouseY > 76 && mouseY < 224){
    bioH.textContent = 'Jen';
    bioP.textContent = 'info';


  }else if (mouseX > 685 && mouseX < 830 && mouseY > 127 && mouseY < 272){
    bioH.textContent = 'khalil';
    bioP.textContent = 'info';
  }
}




canvas.addEventListener('click', function(e){
  getCursorPosition(e);
  displayBio();
});

canvas.addEventListener('mousemove', function(e){
  getCursorPosition(e);
});

draw();