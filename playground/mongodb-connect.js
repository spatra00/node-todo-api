// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
//   if(err){
//     console.log('Unable to connect to MongoDB server');
//   }
//   console.log('Connected to MongoDB server');
// }
//
//   db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
//   }, (err, result) =>{
//     if(err){
//       return console.log('Unable to insert todo', err);
//     }
//
//     console.log(JSON.stringify(result.ops, undefined,2))
//   });
//
//   db.close();
// });

// const mongo = require('mongodb').MongoClient;
//
// mongo.connect('mongodb://localhost:27017/Users', (err, db)=>{
//   if(err){
//     return console.log('Unable to connect to the mongodb database');
//   }
//   console.log('Connected to the database');
//
//   db.collection('users').insertOne({
//     name: 'Satya',
//     email: 'spatra00@gmail.com'
//   }, (err, result)=>{
//     if(err){
//       return console.log('Unable to insert the field');
//     }
//     console.log('Welcome', result.ops[0]._id.getTimestamp());
//   });
// });
