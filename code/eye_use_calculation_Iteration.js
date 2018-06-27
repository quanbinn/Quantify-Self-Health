<form>
  早晨起床躺着：<input type="number" id="1" placeholder="分钟"><br>
  早晨蹲便：<input type="number" id="2" placeholder="分钟"><br>
  吃早饭：<input type="number" id="3" placeholder="分钟"><br> 
  <br>
  上午刚坐到工位时：<input type="number" id="4" placeholder="分钟"><br>
  上午工作间歇：<input type="number" id="5" placeholder="分钟"><br>
  午饭：<input type="number" id="6" placeholder="分钟"><br> 
  <br>
  午睡醒来躺着：<input type="number" id="7" placeholder="分钟"><br>
  下午工作间歇：<input type="number" id="8" placeholder="分钟"><br>
  晚饭：<input type="number" id="9" placeholder="分钟"><br> 
  <br>
  晚上外出锻炼：<input type="number" id="10" placeholder="分钟"><br>
  晚上在家：<input type="number" id="11" placeholder="分钟"><br> 
  睡前：<input type="number" id="12" placeholder="分钟"><br>
  <input type="submit" value="计算出你一天看手机的总时间" onclick="timeTotalCalc()"/>
</form>

<div id="totaltime"></div>


function timeTotalCalc(){
  var time1 = parseInt(document.getElementById("1").value);
  var time2 = parseInt(document.getElementById("2").value);
  var time3 = parseInt(document.getElementById("3").value);
  var time4 = parseInt(document.getElementById("4").value);
  var time5 = parseInt(document.getElementById("5").value);
  var time6 = parseInt(document.getElementById("6").value);
  var time7 = parseInt(document.getElementById("7").value);
  var time8 = parseInt(document.getElementById("8").value);
  var time9 = parseInt(document.getElementById("9").value);
  var time10 = parseInt(document.getElementById("10").value);
  var time11 = parseInt(document.getElementById("11").value);
  var time12 = parseInt(document.getElementById("12").value);
  
  var totaltime = time1 + time2 + time3 + time4 + time5 + time6 + time7 + time8 + time9 + time10 + time11 + time12;    
  
  var totaltimeDict ={};
  
  totaltimeDict["早晨起床躺着"] = time1;totaltimeDict["早晨蹲便"] = time2;totaltimeDict["吃早饭"] = time3;
  totaltimeDict["上午刚坐到工位时"] = time4;totaltimeDict["上午工作间歇"] = time5;totaltimeDict["午饭"] = time6;
  totaltimeDict["午睡醒来躺着"] = time7;totaltimeDict["下午工作间歇"] = time8;totaltimeDict["晚饭"] = time9;
  totaltimeDict["晚上外出锻炼"] = time10;totaltimeDict["晚上在家"] = time11;totaltimeDict["睡前"] = time12;
  totaltimeDict["总时间"] = totaltime;
  
  alert("你一天看手机的总时间："+ totaltime +  "分钟");
  alert("要存进数据库的1条数据"+ totaltimeDict);
  alert("要存进数据库的1条数据"+ totaltimeDict["总时间"]);
  
  document.getElementById("totaltime").textContent = "你一天看手机的总时间" + totaltimeDict +"分钟."; 
}

// https://codepen.io/quanbinn/pen/ERXYJr