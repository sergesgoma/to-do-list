const express = require('express');
const router = express.Router();

// import des controllers
const pageController = require('./controllers/pageController');
const todoController = require('./controllers/todoController');

// page d'accueil
router.get('/', pageController.homepage);
router.post('/', todoController.addTodoList);

// page edit
router.get('/edit/:id', pageController.editPage);
router.post('/edit/:id', todoController.editTodoList);

// page delete
router.get('/delete/:id', pageController.deletePage)

module.exports = router;