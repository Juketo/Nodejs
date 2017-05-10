// var express = require('express');
// var app = express();
var app = require('./config/express')();
//app.set('view engine', 'ejs');

//var rotasProdutos = require('./app/routes/produtos')(app); // load faz automático

app.listen(3000, function(){
    console.log('server rodando');
});