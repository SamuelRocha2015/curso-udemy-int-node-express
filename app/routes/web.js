var model = require('../models/clienteModel')();

module.exports =  function(app){
	
	app.get('/', function(req,resp){
		resp.render('site/home', {clientes:model.all()});
	});

	app.get('/contato', function(req,resp){
		resp.render('site/contato');
	});

}
