var express = require('express');
var app =  express();
app.set('view engine', 'ejs');


app.get('/', function(req,resp){
	resp.render('site/home');
});

app.get('/contato', function(req,resp){
	resp.render('site/contato');
});


app.listen(8000, function(){
	console.log("localhost:8000");
});