module.exports = function(app){
	app.get('/formulario_add', function(req, res){
		res.render("admin/form_add_noticia");
	});
};