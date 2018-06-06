/**
 * Created by Admin on 06.06.2018..
 */

var mongoose = require('mongoose');


var Todo = mongoose.model( 'Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

module.exports = {Todo}