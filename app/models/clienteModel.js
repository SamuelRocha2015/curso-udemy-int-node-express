var db = require('../../config/db');

module.exports = function () {
	this.all = function(retorno){
		var con = db();
		return con.query('select * from curso_cliente', retorno);
	};

	this.find = function(id,retorno){
		var con = db();
		return con.query('select * from curso_cliente where id = ?', id, retorno);
	};

	this.save = function(dados,retorno){
		var con = db();
		return con.query('insert into curso_cliente set ?', dados, retorno);
	};

	return this;
};