module.exports.form_add_noticia = function(application, req, res) {
	res.render("admin/form_add_noticia", {validacao: {}, noticia:{}});
}

module.exports.noticias_salvar = function(application, req, res) {
	var noticia = req.body;

	req.assert('titulo', 'Titulo obrigatorio').notEmpty();
	req.assert('noticia', 'Noticia obrigatorio').notEmpty();

	var errors = req.validationErrors();

	if (errors) {
		res.render("admin/form_add_noticia", {validacao: errors, noticia: noticia});
		return;
	}

	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);
		
	noticiasModel.salvarNoticia(noticia, function(error, result){
		res.redirect('noticias/noticias');
	});
}