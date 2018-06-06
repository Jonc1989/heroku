/**
 * Created by Admin on 06.06.2018..
 */
const {MongoClient, ObjectId} = require('mongodb'); //same shit
const dbName = 'buba';

// Connection URL
const url = 'mongodb://localhost:27017/' + dbName;



MongoClient.connect(url, function(err, client) {
  const db = client.db(dbName);

  // db.collection('datubaze').find().toArray().then((docs) => {
  //     console.log( JSON.stringify( docs, undefined, 2 ))
  // });

  // db.collection('datubaze').find({
  //   _id: new ObjectId( '5b169c78717b8c02c4e6885d' )
  // }).toArray().then((docs) => {
  //   console.log( JSON.stringify( docs, undefined, 2 ))
  // })

  // db.collection('datubaze').find().count(( err, count ) => {
  //   console.log( count)
  // client.close();
  // });

  // db.collection('datubaze').find({text: 'Some text'}).toArray().then(( docs ) => {
  //   console.log( docs)
  //   client.close();
  // });

  // db.collection('datubaze').deleteMany({text: 'Some text2'}).then(( docs ) => {
  //   console.log( docs)
  //   client.close();
  // });

  db.collection('datubaze').findOneAndUpdate({
    _id: new ObjectId( '5b178a837f3b590f388f4050' )
  }, {
    $set: {
      text: 'Another text'
    }
  }, {
    returnOriginal: true
  }).then(( docs ) => {
    console.log( docs)
    client.close();
  });

});