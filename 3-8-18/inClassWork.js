var simpleObject ={
    width:24,
    height:12
}

var propSimpleObject = Object.keys(simpleObject);
var valueSimpleObject = Object.values(simpleObject);
//console.log(propSimpleObject[0].values. + " is " + simpleObject.width + " , " + propSimpleObject[1].values.toString() + " is " + simpleObject.height);

//console.log(propSimpleObject);
//console.log(valueSimpleObject);

console.log("");

console.log("My \"simpleObject\" starts out containing the following: "+"\n"+ propSimpleObject[0] + " = " + valueSimpleObject[0] + "\n" + propSimpleObject[1] + " = " + valueSimpleObject[1]);

simpleObject["length1"] = 6;



propSimpleObject = Object.keys(simpleObject);
valueSimpleObject = Object.values(simpleObject);

console.log("");

console.log("My \"simpleObject\" contains the following via code changes: "+"\n"+ propSimpleObject[0] + " = " + valueSimpleObject[0] + "\n" + propSimpleObject[1] + " = " + valueSimpleObject[1] + "\n" + propSimpleObject[2] + " = " + valueSimpleObject[2]);

var objectEdit = function(prop1,values1,objectA){
    //var objectEdit = function(prop1,values1,objectA){
    
        arr1= objectA;
        arr1[prop1] = values1;
        return arr1;



}

var objectPropRefresh = function(objectA){
    arr1 = objectA;

    prop1Temp = Object.keys(arr1);

    return prop1Temp;

}

var objectValueRefresh = function(objectA){
    arr1 = objectA;

    value1Temp = Object.values(arr1);

    return value1Temp;

}



console.log("");
console.log("I will now add new property called \"volume\", with a value of 30 via a function");
simpleObject = objectEdit("volume",30,simpleObject);
propSimpleObject = objectPropRefresh(simpleObject);
valueSimpleObject = objectValueRefresh(simpleObject);

console.log("");

console.log("simpleObject's New Properties are: "+propSimpleObject);

console.log("");

console.log("simpleObject's New Values are: "+valueSimpleObject);

console.log("");

//var type1 = typeof(simpleObject);
//console.log(type1);
//console.log(propSimpleObject.length);
//console.log(valueSimpleObject.length);

var objectLength =  propSimpleObject.length;

console.log("");

var outPUT = function(objectLen,objectA){
var objectLength = objectLen;
console.log("My object now has the following properties and values: ");
 for(var i= 0; i<objectLength;i++){
     console.log(propSimpleObject[i]+" "+valueSimpleObject[i]);


 }
 //console.log("didn't work :(");
}
 
//var simpleObject2 = simpleObject;
//var propSimpleObject2 = Object.keys(simpleObject2);
//var valueSimpleObject2 = Object.values(simpleObject2);

//console.log("");

//console.log("My \"simpleObject2\" contains the following: "+"\n"+ propSimpleObject2[0] + " = " + valueSimpleObject2[0] + "\n" + propSimpleObject2[1] + " = " + valueSimpleObject2[1] + "\n" + propSimpleObject2[2] + " = " + valueSimpleObject2[2]);

outPUT(objectLength,simpleObject);



