var mysql = require('mysql');

var commonMysql = function () {
	return  mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'portal_noticias'
	});
}

module.exports = function(){
	console.log("autoload carregou o dbConnection");
	return commonMysql;
}