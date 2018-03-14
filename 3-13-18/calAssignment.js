var input1 = document.getElementById("txtInput1").value;
var input2 = document.getElementById("txtInput2").value;
var operator = document.getElementById("txtOperator").value;

//var checkButton = function(event){
   // isOperator(event);
    //isNumber(event);
    //isControl(event);
//}

var onClick = function(event){
    var value = event.target.textContent;
    alert(input1.textContent);
    if(value){
        input1.textContent = "Content";
    }
    else {
        input1.textContent = "No Content";
    }
    
}