<p>请拖动下面的bar, 得出颈部肌肉疼痛的量化分数。10分制。左边为0，即没有疼痛，右面为10，即极端疼痛</p>

<select id="weekday">
  <option value="星期一">星期一</option>
  <option value="星期二">星期二</option>
  <option value="星期三">星期三</option>
  <option value="星期四">星期四</option>
  <option value="星期五">星期五</option>
  <option value="星期六">星期六</option>
  <option value="星期天">星期天</option>
</select>

<input type="range" id="organpain" min="1" max="10" value="5" step="1" >  
<button onclick="painScale()">点击得出你的疼痛量化分数</button>

<p id="showOrganPain"></p>

function painScale(){
  var day = document.getElementById("weekday").value;  
  var scale = document.getElementById("organpain").value;

  var painInDB = {"name":"futureSelf"};
  painInDB["day"] = day;  
  painInDB["scale"] = scale;
  
  alert("你的疼痛量化分数是："+ scale + " (10分制)");  
  alert("这条数据中的key[name] 的pair值是:"+ painInDB["name"]);
  alert("这条数据中的key[day] 的pair值是:"+ painInDB["day"]);
  alert("这条数据中的key[scale] 的pair值是:"+ painInDB["scale"]);
  
  document.getElementById("showOrganPain").innerHTML = painInDB["name"] +":"+ day+"的颈部肌肉疼痛的量化分数是：" + scale; 
}
  
// https://codepen.io/quanbinn/pen/yERBrb

/* resources

https://www.w3schools.com/jsref/dom_obj_range.asp

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range

https://www.html5tutorial.info/html5-range.php

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range

https://www.w3schools.com/howto/howto_js_rangeslider.asp

<p>Value: <span id="demo"></span></p>

<input id="demo" value="5" type="text" size="5">

*/