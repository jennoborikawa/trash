var express = require('express'); 
var path = require('path'); 
var swig = require('swig'); 
swig.setDefaults({cache: false}); 
var Trash = require('./trash-model');
var methodOverride =require('method-override'); 

var app = express(); 
app.use(methodOverride('_method')); 
app.use(express.static(path.join(__dirname, 'node_modules'))); 

app.set('view engine', 'html'); 
app.engine('html', swig.renderFile); 

app.get('/', function(req, res){
	res.render('home', {title: 'Home'}); 
}); 

app.get('/trash', function(req, res){
	res.render('trash', {title: 'Trash', trash: Trash.getTrash()})
})

app.delete('/trash/:id', function(req, res){
	Trash.deleteTrash(req.params.id*1); 
	res.redirect('/trash'); 
}); 


app.listen(process.env.PORT, function(){
	console.log('listening on ' + process.env.PORT)
}); 





