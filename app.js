var app = require('./config/server');

var rodaNoticias = require('./app/routers/noticias')
rodaNoticias(app);

var home = require('./app/routers/home')
home(app);

var formulario_add = require('./app/routers/formulario_add')
formulario_add(app);

app.listen(3000, function(){
	console.log();

});