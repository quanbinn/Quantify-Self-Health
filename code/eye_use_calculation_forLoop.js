<p>请大约估算你在下面的时间段看手机的时间</p>
<form>
  早晨起床躺着：<input type="number" id="0" placeholder="分钟"><br>
  早晨蹲便：<input type="number" id="1" placeholder="分钟"><br>
  吃早饭：<input type="number" id="2" placeholder="分钟"><br> 
  <br>
  上午刚坐到工位时：<input type="number" id="3" placeholder="分钟"><br>
  上午工作间歇：<input type="number" id="4" placeholder="分钟"><br>
  午饭：<input type="number" id="5" placeholder="分钟"><br> 
  <br>
  午睡醒来躺着：<input type="number" id="6" placeholder="分钟"><br>
  下午工作间歇：<input type="number" id="7" placeholder="分钟"><br>
  晚饭：<input type="number" id="8" placeholder="分钟"><br> 
  <br>
  晚上外出锻炼：<input type="number" id="9" placeholder="分钟"><br>
  晚上在家：<input type="number" id="10" placeholder="分钟"><br> 
  睡前：<input type="number" id="11" placeholder="分钟"><br>
  <input type="submit" value="计算出你一天看手机的总时间" onclick="timeTotalCalc()"/>
</form>

<div id="totaltime"></div>

function timeTotalCalc(){
  var iPhoneEvent = ["早晨起床躺着","早晨蹲便","吃早饭","上午刚坐到工位时","上午工作间歇","午饭","午睡醒来躺着","下午工作间歇","晚饭","晚上外出锻炼","晚上在家","睡前"];
  
  var totaltime = 0;
  var totaltimeDict ={};
  
  for (var i = 0; i < 12; i = i + 1){
    var temptime = parseInt(document.getElementById(i).value);
    totaltime = totaltime + temptime;
    totaltimeDict[iPhoneEvent[i]] = temptime;
  }
  
  var totalhours = (totaltime / 60).toFixed(1); 
  alert("你一天看手机的总时间大约："+ totaltime +  "分钟。" +"大约是："+ totalhours +  "小时");
  alert("要存进数据库的1条数据是："+ totaltimeDict);
  alert("这条数据中的key[‘睡前’] 的pair值是:"+ totaltimeDict["睡前"]);
  
  document.getElementById("totaltime").textContent = "你一天看手机的总时间" + totaltime +"分钟."; 
}

// https://codepen.io/quanbinn/pen/JZJXWa