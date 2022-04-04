const TodoList = require('../models/TodoList');

const todoController = {
    addTodoList: async (req, res) => {
        const todoList = new TodoList({
            content:req.body.content
        });
        try {
            await todoList.save();
            res.redirect('/');
        }
        catch (err) {
            res.redirect('/')
        }; 
        
    },
    editTodoList: async (req,res) => {
        const { id } = req.params;
        TodoList.findByIdAndUpdate(id, {content:req.body.content}, (err, docs) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Updated content: ", docs);
                res.redirect('/')
            }
        })
    }

}

module.exports = todoController;