var model = require('../models/clienteModel')();

module.exports.index = function(req,resp){
	model.all(function(erro, resultado){
		resp.render('site/home',{clientes:resultado, erros:{},dados:{}})
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

	req.assert('nome', 'Preencha um Nome').notEmpty();
	req.assert('nome', 'Nome deve ter de 3 a 20 chars').len(3, 30);
	req.assert('nome', 'Preencha um Email').notEmpty();
	req.assert('email', 'Preencha um Email válido').isEmail();

	var validacaoErros = req.validationErrors();
	if(validacaoErros){
		console.log(validacaoErros);
		model.all(function(erro, resultado){
			resp.render('site/home',{clientes:resultado, erros:validacaoErros,dados:dados})
		});

		return;
	}

	model.save(dados, function(erro, resultado){
		if(!erro){
		  resp.redirect('/');
		}else{
		  console.log("Erro ao adicionar o cliente");
		  resp.redirect('/');
		}
	});
};
