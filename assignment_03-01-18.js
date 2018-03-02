/*

function posNeg1(a,b,isNeg){
    var answer=false;
    if(a<0&&b<0&&isNeg){
        answer=true;
    }else { if((a<0||b<0)&&!isNeg){
        answer=true;
    }
    else{
        answer=false;
    }
}
    console.log(answer);
}

posNeg1(1,-1,false);
posNeg1(-1,1,false);
posNeg1(-4,-5,true);
posNeg1(-4,-5,false);
posNeg1(1,1,true);
*/
//doesn't work


var sumAvgArray = function(arrayList){
    var x;
    var totalSum;
    var totalAvg;

    for(var i = 0; i<arrayList.length;i++)
    {
        x[i]=arrayList[i];
    }
    for(var a = 0;a<x.length;a++)
    {
    total+=x[i];
    }
    totalAvg = totalSum/x.length;
    console.log(totalSum);
    console.log(totalAvg);
}

sumAvgArray(2,3,4,5);