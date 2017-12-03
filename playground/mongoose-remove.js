const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result) =>{
//   console.log(result);
// });

//get the delete object
//Todo.findOneAndRemove can reemove by object

//Todo.findByIdAndRemove


Todo.findOneAndRemove('5a2399091bc90b3e66a49728').then((todo)=>{
  console.log(todo);
});
