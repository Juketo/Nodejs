var express = require('express');
var load = require('express-load'); // biblioteca de carregamento automático
var bodyParser = require('body-parser');
var expressValidatior = require('express-validator');

module.exports = function()
{
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidatior());

    load('routes', { cwd: 'app'})
        .then('infra')
        .into(app);
    
    return app;
}