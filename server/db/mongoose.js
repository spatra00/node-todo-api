var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://spatra00:qwertyuiop@ds129156.mlab.com:29156/todoapi' ||'mongodb://localhost:27017/TodoApp');

module.exports ={
  mongoose: mongoose
};
