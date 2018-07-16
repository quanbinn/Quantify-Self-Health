
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
  ctx.beginPath();ctx.arc(pset["lowerBack"][0],pset["lowerBack"][1],1,2*Math.PI,false);ctx.stroke();
};
function drawHead(){
  ctx.beginPath();ctx.arc(pset["nose"][0],pset["nose"][1],5.5,2*Math.PI,false);ctx.stroke();
  ctx.beginPath();ctx.arc(pset["eye1"][0],pset["eye1"][1],1,2*Math.PI,false);ctx.stroke();
  ctx.beginPath();ctx.arc(pset["eye2"][0],pset["eye2"][1],1,2*Math.PI,false);ctx.stroke();
};
