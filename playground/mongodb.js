/**
 * Created by Admin on 05.06.2018..
 */
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb'); //same shit
var obj = new ObjectId();
console.log( obj);
// Database Name
const dbName = 'buba';

// Connection URL
const url = 'mongodb://localhost:27017/' + dbName;
var random = null;

//Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  if( err ){
    console.log( err );
  }else{
    console.log("Connected successfully to server");
  }

  const db = client.db(dbName);
  db.collection('datubaze').insertOne({
    text: 'Some text6',
    completed: false
  }, ( err, result ) => {
    if( err ){
      console.log( err );
    }
    console.log( result.ops[0]._id.getTimestamp());
  });
  //const db = client.db(dbName);

  client.close();
});