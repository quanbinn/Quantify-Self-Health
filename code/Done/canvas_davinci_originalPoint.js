<canvas id="myCanvas" width="100" height="100"></canvas>

var canvas = document.getElementById('myCanvas');
var ctx=canvas.getContext('2d');

drawArm();drawLeg();drawCore();drawHead();

function drawArm() {
  ctx.beginPath();
  ctx.moveTo(37,20);ctx.lineTo(25,20);ctx.lineTo(10,20);

  ctx.moveTo(10,20);ctx.lineTo(2,16);
  ctx.moveTo(10,20);ctx.lineTo(4,17);
  ctx.moveTo(10,20);ctx.lineTo(0,18);
  ctx.moveTo(10,20);ctx.lineTo(0,19);
  ctx.moveTo(10,20);ctx.lineTo(2,20);

  ctx.moveTo(62,20);ctx.lineTo(75,20);ctx.lineTo(90,20);

  ctx.moveTo(90,20);ctx.lineTo(99,17);
  ctx.moveTo(90,20);ctx.lineTo(96,17.5);
  ctx.moveTo(90,20);ctx.lineTo(100,18);
  ctx.moveTo(90,20);ctx.lineTo(99,18.5);
  ctx.moveTo(90,20);ctx.lineTo(97,20);
  ctx.stroke();  
};
function drawLeg() {
  ctx.moveTo(43,47);ctx.lineTo(45,73);ctx.lineTo(47,95);

  ctx.moveTo(47,95);ctx.lineTo(45,100);
  ctx.moveTo(47,95);ctx.lineTo(46,100);
  ctx.moveTo(47,95);ctx.lineTo(47,100);
  ctx.moveTo(47,95);ctx.lineTo(48,100);
  ctx.moveTo(47,95);ctx.lineTo(50,100);
  
  ctx.moveTo(57,47);ctx.lineTo(54,73);ctx.lineTo(54,95);

  ctx.moveTo(54,95);ctx.lineTo(65,100);
  ctx.moveTo(54,95);ctx.lineTo(64,100);
  ctx.moveTo(54,95);ctx.lineTo(63,100);
  ctx.moveTo(54,95);ctx.lineTo(62,100);
  ctx.moveTo(54,95);ctx.lineTo(61,100);
  
  ctx.stroke();  
};
function drawCore(){
  ctx.moveTo(37,20);ctx.lineTo(43,35);ctx.lineTo(43,47);
  ctx.moveTo(62,20);ctx.lineTo(58,35);ctx.lineTo(57,47);
  ctx.moveTo(37,20);ctx.lineTo(50,15);ctx.lineTo(62,20);
  ctx.moveTo(43,47);ctx.lineTo(57,47);
  ctx.stroke();  
  
  ctx.beginPath();ctx.arc(50,15,1,2*Math.PI,false);ctx.stroke();  
  ctx.beginPath();ctx.arc(50,40,1,2*Math.PI,false);ctx.stroke();
};
function drawHead(){
  ctx.beginPath();ctx.arc(50,9,5.5,2*Math.PI,false);ctx.stroke();
  ctx.beginPath();ctx.arc(48,6.5,1,2*Math.PI,false);ctx.stroke();
  ctx.beginPath();ctx.arc(52,6.5,1,2*Math.PI,false);ctx.stroke();
};

// https://codepen.io/quanbinn/pen/RJvJpp