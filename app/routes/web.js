var clienteController = require('../controllers/clienteController');

module.exports =  function(app){
	
	app.get('/', function(req,resp){
		clienteController.index(req,resp);
	});

	app.post('/', function(req,resp){
		clienteController.save(req,resp);
	});


	app.get('/detalhe/:id', function(req,resp){
		clienteController.edit(req,resp);
	});

	app.get('/contato', function(req,resp){
		resp.render('site/contato');
	});

}
