
module.exports =  function(app){
	
	app.get('/', function(req,resp){
		resp.render('site/home');
	});

	app.get('/contato', function(req,resp){
		resp.render('site/contato');
	});

}
