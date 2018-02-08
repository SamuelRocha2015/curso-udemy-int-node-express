var  mysql = require('mysql');

var con = function(){
	return mysql.createConnection({
		host:'codeshouse.com.br',
		user:'codes475_admin',
		password:'Admin@ti',
		database:'codes475_desenv'
	});
};


module.exports = con;