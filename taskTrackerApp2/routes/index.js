//import { userInfo } from 'os';

var express = require('express');
var router = express.Router();
//Include ObjectId
var ObjectId = require('mongodb').ObjectID;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// POST to Add Task Service //
router.get('/deletetask/:id', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Set our collection
  var collection = db.get('usercollection');

//collection.delete = function(req, res) {
  // Delete a task with the specified taskID in the request



  collection.remove({"task": req.body.task},{}, function(err, task){
      if(err) {
          console.log(err);
          if(err.kind === 'ObjectId') {
              return res.status(404).send({message: "Task not found with id " + req.params._id});                
          }
          return res.status(500).send({message: "Could not delete task with id " + req.params._id});
      }

      if(!task) {
          return res.status(404).send({message: "Task not found with id " + req.params._id});
      }

      res.redirect('tasklist');
  });
});

/* GET TaskTracker page. */
router.get("/tasks",function(req, res){
  res.render("tasks",{title: "Task Tracker!"});
});


/* GET tasklist page. */
router.get("/tasklist", function(req, res){
  var db = req.db;
  var collection = db.get("usercollection");
  collection.find({},{},function(e,docs){
    res.render("tasklist",{
      "tasklist" : docs
    });
  });
});

router.get("/addtask", function(req,res){
  res.render("tasklist");
});


// POST to Add Task Service //
router.post('/addtask', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var taskName = req.body.taskname;
  var taskDesc = req.body.taskdesc;

  // Set our collection
  var collection = db.get('usercollection');

  // Submit to the DB
  collection.insert({
      "task" : taskName,
      "description" : taskDesc,
  }, function (err, doc) {
      if (err) {
          // If it failed, return error
          res.send("There was a problem adding the information to the database.");
      }
      else {
          // And forward to success page
          res.redirect("tasklist");
      }
  });
});




module.exports = router;
