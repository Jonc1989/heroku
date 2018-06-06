/**
 * Created by Admin on 06.06.2018..
 */

var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./db/models/Todo');

var app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post( '/todos', ( req, res ) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then( (doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get( '/todos', ( req, res ) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(port);

module.exports = {app};