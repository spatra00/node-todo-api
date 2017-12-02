const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// var id = '5a2290316e089a1b04b4a44d11';
//
// if(!ObjectID.isValid(id)){
//   return console.log('Id not valid')
// }
//
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('id not found')
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));
