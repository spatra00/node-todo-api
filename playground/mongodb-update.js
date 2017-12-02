// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//findOneAndUpdate
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a2235b41bc90b3e66a45c14')
  },{
    $set: {
      completed: true
    }
  },{
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
  });

  // db.close();
});
