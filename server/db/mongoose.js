/**
 * Created by Admin on 06.06.2018..
 */
var mongoose = require('mongoose');

const dbName = 'buba';
const url = 'mongodb://localhost:27017/' + dbName;

mongoose.Promise = global.Promise;
mongoose.connect(url);

module.exports = {mongoose};