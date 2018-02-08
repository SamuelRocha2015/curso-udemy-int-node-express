var model = require('../models/clienteModel')();

module.exports.index = function(req,resp){
	model.all(function(erro, resultado){
		resp.render('site/home',{clientes:resultado})
	});
};


module.exports.edit = function(req,resp){
	model.find(req.params.id, function(erro, resultado){
		if(resultado[0] && !erro){
			resp.render('site/detalhe',{cliente:resultado[0]});
		} else {
			console.log("Esse cliente não existe");
			resp.redirect('/');
		}
	});
};



module.exports.save = function(req,resp){
	var dados  = req.body;
	model.save(dados, function(erro, resultado){
		if(!erro){
		  res.redirect('/');
		}else{
		  console.log("Erro ao adicionar o cliente");
		  res.redirect('/');
		}
	});
};
