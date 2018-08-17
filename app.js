var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/noticias', function(req, res){
	res.render("noticias/noticia");
});

app.get('/formulario_add', function(req, res){
	res.render("admin/form_add_noticia");
});

app.get('/', function(req, res){
	res.render("home/index");
});

app.listen(3000, function(){
	console.log("servidor rodando");
	console.log("servidor nodemon");
});