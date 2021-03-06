var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {ToDo} = require('./models/todo');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  var todo = new ToDo({
    text: req.body.text
  });

  todo.save().then( (doc)=>{ res.send(doc);}, (e)=>{res.send(e);});

});




app.listen(3000, () => {
  console.log("Server Started on port 3000");
})

//server.js Only responsible for routes
