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
	return commonMysql;
}