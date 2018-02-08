var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var moongoose = require('moongoose');
var port = 3000;

// se connecter à moongoose
moongoose.connect('mongodb://localhost/bookstore');
var db = moongoose.connection;

// quand in se connecte à la racine de l'app (en local: localhost:3000 si le port est 3000)
app.get('/', function(req, res){
	res.send('Hello World!');
});


app.listen(port);
console.log("le server est en cours d'exécution sur le port "+port);