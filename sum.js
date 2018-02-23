function addTogether(){
    


var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;

var totalSum = parseInt(num1) + parseInt(num2);


document.getElementById('totalSum').textContent = toString(totalSum);

}