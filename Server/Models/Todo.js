// TodoModel.js

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  done:{
    type: Boolean,
    default: false
  },
  // Other fields if any
});

const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;
