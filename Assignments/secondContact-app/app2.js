//create a variable called express
//notify the app that it needs express framework
var express = require("express");
//bootstrap the app to express
var app = express();
//run this app on port 3000
var port = 3000;

//body parer is a module in express package that helps apps
//parse data in http req body
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//create a variable called mongoose
//notify the app that it needs mongoose framework
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//connect the app to the db in the specified location
mongoose.connect("mongodb://localhost:27017/contactApp");

//inform the app to use ejs as it's view engine
app.set('view engine', 'ejs');

var contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
    subjectSelect: String,
    longMessage: String,
    create_at: {type:Date, default:Date.now()},
});
var Contact = mongoose.model("ContactInfo", contactSchema);




//binding root context locahost:3000
//to GET method that responds with index.html file
//req - HTTP req made by client
//res - HTTP response


//Creating a GET method
app.get("/", (req, res) => {
    //find is a mongoose function that helps get all results
    //from the specified schema
    Contact.find((err, result) =>
    {
        //if unable to get results
        //log the error to the console
        if (err) return console.log(err)
        //if success render index.ejs and assign result to
        //to a templating varaiable named contacts that we can access
        //in index.ejs
        res.render("index.ejs",{contacts: result})
    })
})

app.get("/style.css", (req, res) => {
    //sendFile is a method in express framework that send file back
    //to the client
    res.sendFile(__dirname + "/style.css");
});


app.post("/saveContact", (req, res) => {
    console.log(req);
    var myData = new Contact(req.body);
    myData.save()
        .then(item => {
            res.redirect("/displayResults");
    })
    .catch(err => {
        res.status(400).send("Unable to database");
    })
});

app.get("/displayResults", (req, res) => {
    //find is a mongoose function that helps get all results
    //from the specified schema
    
    Contact.find({ firstName: "Justin" }, (err, result) =>
        //Contact.find((err, result) =>
    {
        //if unable to get results
        //log the error to the console
        if (err) return console.log(err)
        //if success render index.ejs and assign result to
        //to a templating varaiable named contacts that we can access
        //in index.ejs
        res.render("index.ejs",{contacts: result})
    })
})

//informing your app to listen to port number you provided in the top
app.listen(port, () => {
    console.log("Server listening on port " + port);
});