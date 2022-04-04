// création du serveur express
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 5000;
const router = require('./app/router');
require('dotenv').config({path: './.env'});

const app = express();

// connexion à la db
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser:true}, () => console.log('Connected to DB'), {useFindAndModify:false} );

// définition du view engine + path views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './app/views'));

// path du dossier static
app.use(express.static('./public'));

// extraction des données du formulaire + ajout aux propriétés du req.body
app.use(express.urlencoded({extended:true}));

// lancement du serveur + mise en mode écoute
app.use(router);
app.listen(port, () => console.log(`Listening to port ${port}`));