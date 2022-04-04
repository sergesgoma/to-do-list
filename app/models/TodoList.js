const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema ({
    content: String
})

module.exports = mongoose.model('TodoList', todoSchema);