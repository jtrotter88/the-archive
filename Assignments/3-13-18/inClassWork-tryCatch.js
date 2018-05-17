var getMonthName = function(monName){
    //mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[monName-1]) {
    return months[monName-1];
  } 
  else {
   throw "InvalidMonthNo"; //throw keyword is used here
  }
}

var displayMonthName = function(){
try { // statements to try
  monthName = getMonthName(11); // function could throw exception
  console.log(monthName);
}
catch (e) {
  monthName = "unknown";
  console.log(monthName);
  console.log("Invalid Month"); // pass exception object to error handler -> your own function
}
finally{
    console.log("Going to eat my granola")
}


}
displayMonthName();


