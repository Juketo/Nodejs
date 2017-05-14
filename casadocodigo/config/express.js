var express = require('express');
var load = require('express-load'); // biblioteca de carregamento automático
var bodyParser = require('body-parser');
var expressValidatior = require('express-validator');

module.exports = function()
{
    var app = express();

    app.use(express.static('./app/public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidatior());

    load('routes', { cwd: 'app'})
        .then('infra')
        .into(app);

    app.use(function(req, res, next)
    {
        res.status(404).render('erros/404');
        next();
    });

    app.use(function(error, req, res, next)
    {
        if (process.env.NODE_ENV == 'production') 
        { // só joga erro amigável quando em produção
            res.status(500).render('erros/404'); // erro 500 é quando não acha o DB
            return;
        }
        next(error);
    });

    //consign({cwd: process.cwd()+"/app"});

    // tem que colocar na ordem, caso contrário ele passa pelo middleware e 
    // ainda não vai ter acontecido nenhum erro.
    
    return app;
}