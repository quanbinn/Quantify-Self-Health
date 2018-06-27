<form>
  早晨起床躺着看：<input type="number" id="1" placeholder="分钟"><br>
  早晨蹲便看：<input type="number" id="2" placeholder="分钟"><br>
  <input type="submit" value="计算出你一天看手机的总时间" onclick="timeTotalCalc()"/>
</form>

<div id="totaltime"></div>


function timeTotalCalc(){
  var time1 = parseInt(document.getElementById("1").value);
  var time2 = parseInt(document.getElementById("2").value);
  
  var totaltime = time1 + time2;    
  
  var totaltimeDict ={};
  
  totaltimeDict["早晨起床躺着看"] = time1;
  totaltimeDict["早晨蹲便看"] = time2;
  totaltimeDict["总时间"] = totaltime;
  
  alert("你一天看手机的总时间："+ totaltime +  "分钟");
  alert("要存进数据库的1条数据"+ totaltimeDict);
  alert("要存进数据库的1条数据"+ totaltimeDict["总时间"]);
  
  document.getElementById("totaltime").textContent = "你一天看手机的总时间" + totaltimeDict +"分钟."; 
}

// https://codepen.io/quanbinn/pen/OEmbNy