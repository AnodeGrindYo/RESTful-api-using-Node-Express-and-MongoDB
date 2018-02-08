var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 3000;

Genre = require('./models/genres');
Book = require('./models/books');

// se connecter à moongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

// quand in se connecte à la racine de l'app (en local: localhost:3000 si le port est 3000)
app.get('/', function(req, res){
	res.send('Veuillez utiliser /api/books or /api/genre');
});

app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres); // affiche la liste des genres
	});
});

app.get('/api/books', function(req, res){
	Book.getBooks(function(err, books){
		if(err){
			throw err;
		}
		res.json(books); // affiche la liste des genres
	});
});

app.get('/api/books/:id', function(req, res){
	Book.getBookById(req.params.id, function(err, book){
		if(err){
			throw err;
		}
		res.json(book); // affiche la liste des genres
	});
});

app.listen(port);
console.log("le server est en cours d'exécution sur le port "+port);