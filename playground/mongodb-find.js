// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({_id: new ObjectID('5a222c7ed109b61100f0b2f3')}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined ,2));
  // }, (err)=>{
  //   console.log('Unable to connect to the server');
  // });
  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos count: ${count}`);
  }, (err)=>{
    console.log('Unable to connect to the server');
  });

  // db.close();
});
