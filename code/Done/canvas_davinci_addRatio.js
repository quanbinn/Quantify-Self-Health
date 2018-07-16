<canvas id="myCanvas" width="500" height="500"></canvas>

var canvas = document.getElementById('myCanvas');
var ctx=canvas.getContext('2d');
var ratio = 5;

var pset = {
	"finger1":[2,16],"finger2":[4,17],"finger3":[0,18],"finger4":[0,19],"finger5":[2,20],
	"finger6":[99,17],"finger7":[96,17.5],"finger8": [100,17.5],"finger9":[99,18.5],"finger10":[97,20],
	"toe1":[45,100],"toe2":[46,100],"toe3":[47,100],"toe4":[48,100],"toe5":[50,100],	
	"toe6":[65,100],"toe7":[64,100],"toe8":[63,100],"toe9":[62,100],"toe10":[61,100],	
	"eye1":[48,6.5],"eye2":[52,6.5],"nose":[50,9],"neck":[50,15],
	"wrist1":[10,20],"wrist2":[90,20],"elbow1":[25,20],"elbow2":[75,20],
	"shoulder1":[37,20],"shoulder2":[62,20],"lowerBack":[50,40],
	"waist1":[43,35],"waist2":[58,35],"hip1":[43,47],"hip2":[57,47],
	"knee1":[45,73],"knee2":[54,73],"ankle1":[47,95],"ankle2":[54,95]
}

pset["finger1"][0] = pset["finger1"][0] * ratio;
pset["finger1"][1] = pset["finger1"][1] * ratio;
pset["finger2"][0] = pset["finger2"][0] * ratio;
pset["finger2"][1] = pset["finger2"][1] * ratio;
pset["finger3"][0] = pset["finger3"][0] * ratio;
pset["finger3"][1] = pset["finger3"][1] * ratio;
pset["finger4"][0] = pset["finger4"][0] * ratio;
pset["finger4"][1] = pset["finger4"][1] * ratio;
pset["finger5"][0] = pset["finger5"][0] * ratio;
pset["finger5"][1] = pset["finger5"][1] * ratio;
pset["finger6"][0] = pset["finger6"][0] * ratio;
pset["finger6"][1] = pset["finger6"][1] * ratio;
pset["finger7"][0] = pset["finger7"][0] * ratio;
pset["finger7"][1] = pset["finger7"][1] * ratio;
pset["finger8"][0] = pset["finger8"][0] * ratio;
pset["finger8"][1] = pset["finger8"][1] * ratio;
pset["finger9"][0] = pset["finger9"][0] * ratio;
pset["finger9"][1] = pset["finger9"][1] * ratio;
pset["finger10"][0] = pset["finger10"][0] * ratio;
pset["finger10"][1] = pset["finger10"][1] * ratio;
pset["toe1"][0] = pset["toe1"][0] * ratio;
pset["toe1"][1] = pset["toe1"][1] * ratio;
pset["toe2"][0] = pset["toe2"][0] * ratio; 
pset["toe2"][1] = pset["toe2"][1] * ratio;
pset["toe3"][0] = pset["toe3"][0] * ratio; 
pset["toe3"][1] = pset["toe3"][1] * ratio; 
pset["toe4"][0] = pset["toe4"][0] * ratio;
pset["toe4"][1] = pset["toe4"][1] * ratio; 
pset["toe5"][0] = pset["toe5"][0] * ratio; 
pset["toe5"][1] = pset["toe5"][1] * ratio;
pset["toe6"][0] = pset["toe6"][0] * ratio;
pset["toe6"][1] = pset["toe6"][1] * ratio;
pset["toe7"][0] = pset["toe7"][0] * ratio;
pset["toe7"][1] = pset["toe7"][1] * ratio;
pset["toe8"][0] = pset["toe8"][0] * ratio;
pset["toe8"][1] = pset["toe8"][1] * ratio;
pset["toe9"][0] = pset["toe9"][0] * ratio;
pset["toe9"][1] = pset["toe9"][1] * ratio;
pset["toe10"][0] = pset["toe10"][0] * ratio;
pset["toe10"][1] = pset["toe10"][1] * ratio;
pset["eye1"][0] = pset["eye1"][0] * ratio;
pset["eye1"][1] = pset["eye1"][1] * ratio; 
pset["eye2"][0] = pset["eye2"][0] * ratio;
pset["eye2"][1] = pset["eye2"][1] * ratio;
pset["nose"][0] = pset["nose"][0] * ratio;
pset["nose"][1] = pset["nose"][1] * ratio;
pset["neck"][0] = pset["neck"][0] * ratio;
pset["neck"][1] = pset["neck"][1] * ratio;
pset["wrist1"][0] = pset["wrist1"][0] * ratio;
pset["wrist1"][1] = pset["wrist1"][1] * ratio;
pset["wrist2"][0] = pset["wrist2"][0] * ratio;
pset["wrist2"][1] = pset["wrist2"][1] * ratio;
pset["elbow1"][0] = pset["elbow1"][0] * ratio;
pset["elbow1"][1] = pset["elbow1"][1] * ratio;
pset["elbow2"][0] = pset["elbow2"][0] * ratio;
pset["elbow2"][1] = pset["elbow2"][1] * ratio;
pset["shoulder1"][0] = pset["shoulder1"][0] * ratio;
pset["shoulder1"][1] = pset["shoulder1"][1] * ratio;
pset["shoulder2"][0] = pset["shoulder2"][0] * ratio;
pset["shoulder2"][1] = pset["shoulder2"][1] * ratio;
pset["lowerBack"][0] = pset["lowerBack"][0] * ratio;
pset["lowerBack"][1] = pset["lowerBack"][1] * ratio;
pset["waist1"][0] = pset["waist1"][0] * ratio;
pset["waist1"][1] = pset["waist1"][1] * ratio;
pset["waist2"][0] = pset["waist2"][0] * ratio;
pset["waist2"][1] = pset["waist2"][1] * ratio;
pset["hip1"][0] = pset["hip1"][0] * ratio;
pset["hip1"][1] = pset["hip1"][1] * ratio;
pset["hip2"][0] = pset["hip2"][0] * ratio;
pset["hip2"][1] = pset["hip2"][1] * ratio;
pset["knee1"][0] = pset["knee1"][0] * ratio;
pset["knee1"][1] = pset["knee1"][1] * ratio;
pset["knee2"][0] = pset["knee2"][0] * ratio;
pset["knee2"][1] = pset["knee2"][1] * ratio;
pset["ankle1"][0] = pset["ankle1"][0] * ratio;
pset["ankle1"][1] = pset["ankle1"][1] * ratio;
pset["ankle2"][0] = pset["ankle2"][0] * ratio;
pset["ankle2"][1] = pset["ankle2"][1] * ratio;

drawArm();drawLeg();drawCore();drawHead();

function drawArm() {
  ctx.beginPath();
  ctx.moveTo(pset["shoulder1"][0],pset["shoulder1"][1]);ctx.lineTo(pset["elbow1"][0],pset["elbow1"][1]);ctx.lineTo(pset["wrist1"][0],pset["wrist1"][1]);

  ctx.moveTo(pset["wrist1"][0],pset["wrist1"][1]);ctx.lineTo(pset["finger1"][0],pset["finger1"][1]);
  ctx.moveTo(pset["wrist1"][0],pset["wrist1"][1]);ctx.lineTo(pset["finger2"][0],pset["finger2"][1]);
  ctx.moveTo(pset["wrist1"][0],pset["wrist1"][1]);ctx.lineTo(pset["finger3"][0],pset["finger3"][1]);
  ctx.moveTo(pset["wrist1"][0],pset["wrist1"][1]);ctx.lineTo(pset["finger4"][0],pset["finger4"][1]);
  ctx.moveTo(pset["wrist1"][0],pset["wrist1"][1]);ctx.lineTo(pset["finger5"][0],pset["finger5"][1]);

  ctx.moveTo(pset["shoulder2"][0],pset["shoulder2"][1]);ctx.lineTo(pset["elbow2"][0],pset["elbow2"][1]);ctx.lineTo(pset["wrist2"][0],pset["wrist2"][1]);

  ctx.moveTo(pset["wrist2"][0],pset["wrist2"][1]);ctx.lineTo(pset["finger6"][0],pset["finger6"][1]);
  ctx.moveTo(pset["wrist2"][0],pset["wrist2"][1]);ctx.lineTo(pset["finger7"][0],pset["finger7"][1]);
  ctx.moveTo(pset["wrist2"][0],pset["wrist2"][1]);ctx.lineTo(pset["finger8"][0],pset["finger8"][1]);
  ctx.moveTo(pset["wrist2"][0],pset["wrist2"][1]);ctx.lineTo(pset["finger9"][0],pset["finger9"][1]);
  ctx.moveTo(pset["wrist2"][0],pset["wrist2"][1]);ctx.lineTo(pset["finger10"][0],pset["finger10"][1]);
  ctx.stroke();  
};
function drawLeg() {
  ctx.moveTo(pset["hip1"][0],pset["hip1"][1]);ctx.lineTo(pset["knee1"][0],pset["knee1"][1]);ctx.lineTo(pset["ankle1"][0],pset["ankle1"][1]);

  ctx.moveTo(pset["ankle1"][0],pset["ankle1"][1]);ctx.lineTo(pset["toe1"][0],pset["toe1"][1]);
  ctx.moveTo(pset["ankle1"][0],pset["ankle1"][1]);ctx.lineTo(pset["toe2"][0],pset["toe2"][1]);
  ctx.moveTo(pset["ankle1"][0],pset["ankle1"][1]);ctx.lineTo(pset["toe3"][0],pset["toe3"][1]);
  ctx.moveTo(pset["ankle1"][0],pset["ankle1"][1]);ctx.lineTo(pset["toe4"][0],pset["toe4"][1]);
  ctx.moveTo(pset["ankle1"][0],pset["ankle1"][1]);ctx.lineTo(pset["toe5"][0],pset["toe5"][1]);
  
  ctx.moveTo(pset["hip2"][0],pset["hip2"][1]);ctx.lineTo(pset["knee2"][0],pset["knee2"][1]);ctx.lineTo(pset["ankle2"][0],pset["ankle2"][1]);

  ctx.moveTo(pset["ankle2"][0],pset["ankle2"][1]);ctx.lineTo(pset["toe6"][0],pset["toe6"][1]);
  ctx.moveTo(pset["ankle2"][0],pset["ankle2"][1]);ctx.lineTo(pset["toe7"][0],pset["toe7"][1]);
  ctx.moveTo(pset["ankle2"][0],pset["ankle2"][1]);ctx.lineTo(pset["toe8"][0],pset["toe8"][1]);
  ctx.moveTo(pset["ankle2"][0],pset["ankle2"][1]);ctx.lineTo(pset["toe9"][0],pset["toe9"][1]);
  ctx.moveTo(pset["ankle2"][0],pset["ankle2"][1]);ctx.lineTo(pset["toe10"][0],pset["toe10"][1]);
  
  ctx.stroke();  
};
function drawCore(){
  ctx.moveTo(pset["shoulder1"][0],pset["shoulder1"][1]);ctx.lineTo(pset["waist1"][0],pset["waist1"][1]);ctx.lineTo(pset["hip1"][0],pset["hip1"][1]);
  ctx.moveTo(pset["shoulder2"][0],pset["shoulder2"][1]);ctx.lineTo(pset["waist2"][0],pset["waist2"][1]);ctx.lineTo(pset["hip2"][0],pset["hip2"][1]);
  ctx.moveTo(pset["shoulder1"][0],pset["shoulder1"][1]);ctx.lineTo(pset["neck"][0],pset["neck"][1]);ctx.lineTo(pset["shoulder2"][0],pset["shoulder2"][1]);
  ctx.moveTo(pset["hip1"][0],pset["hip1"][1]);ctx.lineTo(pset["hip2"][0],pset["hip2"][1]);
  ctx.stroke();  
  
  ctx.beginPath();ctx.arc(pset["neck"][0],pset["neck"][1],1,2*Math.PI,false);ctx.stroke();  
  ctx.beginPath();ctx.arc(pset["lowerBack"][0],pset["lowerBack"][1],1*ratio,2*Math.PI,false);ctx.stroke();
};
function drawHead(){
  ctx.beginPath();ctx.arc(pset["nose"][0],pset["nose"][1],5.5*ratio,2*Math.PI,false);ctx.stroke();
  ctx.beginPath();ctx.arc(pset["eye1"][0],pset["eye1"][1],1*ratio,2*Math.PI,false);ctx.stroke();
  ctx.beginPath();ctx.arc(pset["eye2"][0],pset["eye2"][1],1*ratio,2*Math.PI,false);ctx.stroke();
};

// https://codepen.io/quanbinn/pen/QxYVyG