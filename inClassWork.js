var isPrime = function(k) {
    var prime = true;
    console.log(k);
    for(var i=2;i<k;i++) {
        if(k%i===0){
            prime=false;
        }
    }
    console.log(prime);

}

var isParrotInTrouble = function(isTalking,hour){
    if(isTalking==true&&hour<7||hour>20){
        console.log("Hour?: "+hour+" || Talking?: "+isTalking+"    SHUT UP!!! (>.<)");
    }else{
        console.log("Hour?: "+hour+" || Talking?: "+isTalking+"   Birdie want a cracker? (^.^)");
    }
}

var isParrotInTroubleCheck = function(){
    for(var isTalking=0;isTalking<2;isTalking++)
        for(var hour=0;hour<24;hour++){

            if(isTalking=true&&hour<7||hour>20){
                console.log("Hour?: "+hour+" || Talking?: "+isTalking+"    SHUT UP!!! (>.<)");
            }else{
                console.log("Hour?: "+hour+" || Talking?: "+isTalking+"   Birdie want a cracker? (^.^)");
    }
}
}
console.log("");
console.log("Check Specific Time and Talking?")
isParrotInTrouble(true,6);
console.log("");
console.log("Check all")
isParrotInTroubleCheck();

