function instructions1() {
  document.getElementById("answerText").innerHTML = "Hello, click each button to compute the values in various ways";
}

function instructions2() {
  document.getElementById("answerText").innerHTML = "Hello, click each button to calculate the area and perimeter of the values given";
}

function instructions3() {
  document.getElementById("answerText").innerHTML = "Hello, click each button to calculate the area and circumference of the radius given";
}

function addNums() {
  var num1 = parseInt(document.getElementById("num1").value);
  
  var num2 = parseInt(document.getElementById("num2").value);
  
  var totalSUM = num1 + num2;
  
  document.getElementById("answerText1").innerHTML = totalSUM;
  alert(totalSUM);
}

function subtractNums() {
  var num1 = parseInt(document.getElementById("num1").value);
  
  var num2 = parseInt(document.getElementById("num2").value);
  
  var totalSUM = num1 - num2;
  
  document.getElementById("answerText1").innerHTML = totalSUM;
  alert(totalSUM);
}

function multiplyNums() {
  var num1 = parseInt(document.getElementById("num1").value);
  
  var num2 = parseInt(document.getElementById("num2").value);
  
  var totalSUM = num1 * num2;
  
  document.getElementById("answerText1").innerHTML = totalSUM;
  alert(totalSUM);
}

function divideNums() {
  var num1 = parseInt(document.getElementById("num1").value);
  
  var num2 = parseInt(document.getElementById("num2").value);
  
  var totalSUM = num1 / num2;
  
  document.getElementById("answerText1").innerHTML = totalSUM;
  alert(totalSUM);
}

function areaRect() {
  var lengthNum = parseInt(document.getElementById("lengthNum").value);
  
  var widthNum = parseInt(document.getElementById("widthNum").value);
  
  var totalAreaRect = lengthNum*widthNum;
  
  document.getElementById("answerText2").innerHTML = totalAreaRect;
  alert(totalAreaRect);
}

function perimRect() {
  var lengthNum = parseInt(document.getElementById("lengthNum").value);
  
  var widthNum = parseInt(document.getElementById("widthNum").value);
  
  var totalPerimiter = 2*(lengthNum+widthNum);
  
  document.getElementById("answerText2").innerHTML = totalPerimiter;
  alert(totalPerimiter);
}

function areaCircle() {
  var radNum = parseInt(document.getElementById("radius").value);
  
  var areaCircle = Math.PI*radNum*radNum;
  
  document.getElementById("answerText3").innerHTML = areaCircle;
  alert(areaCircle);
}

function circumCircle() {
  var radNum = parseInt(document.getElementById("radius").value);
  
  var circumCircle = Math.PI*radNum*2;
  
  document.getElementById("answerText3").innerHTML = circumCircle;
  alert(circumCircle);
}