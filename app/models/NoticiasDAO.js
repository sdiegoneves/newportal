function NoticiasDAO(connection) {
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
	this._connection.query("select * from noticias", callback);
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback) {
	this._connection.query("select * from noticias where id="+ id_noticia);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
	this._connection.query("insert into noticias set ?", noticia);
}

NoticiasDAO.prototype.getUltimasNoticias = function(callback) {
	this._connection.query("select * from noticias order by id_noticia desc limit 5 ", callback);
}


module.exports = function() {
	return NoticiasDAO;
}