const TodoList = require('../models/TodoList');

const pageController = {
    homepage: async (req, res) => {
        TodoList.find({}, (err, todolists) => {
            res.render('index', {todolists: todolists})
        })
    },
    editPage: async (req,res) => {
        const { id } = req.params;
        TodoList.find({}, (err, todolists) => {
          res.render('edit', {todolists: todolists, id:id}); 
        })
    },
    deletePage: async (req, res) => {
        const { id } = req.params;
        TodoList.findByIdAndDelete(id, (err, docs) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Deleted :", docs)
                res.redirect('/');
            }
        })
    }
}

module.exports = pageController;