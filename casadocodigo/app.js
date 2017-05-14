// var express = require('express');
// var app = express();
var app = require('./config/express')();
//app.set('view engine', 'ejs');
var http = require('http').Server(app); // pq o socket_io pede ele
var io = require('socket.io')(http);

app.set('io', io); // pegar o objeto io você deve pedi-lo para o objeto do express

//var rotasProdutos = require('./app/routes/produtos')(app); // load faz automático

var porta = process.env.PORT || 3000; // deixa em aberto se não achar, usa a 300
http.listen(porta, function()
{ //era chamado do app do express, mas mudou por causa do socket_io
    console.log('server rodando no heroku');
});