var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/produtos', function(req, res){
    //res.send('<html><body><h1>Listagem de produtos</h1></body></html>')
    res.render('produtos/lista');
});

app.listen(3000, function(){
    console.log('server rodando de novo');
});