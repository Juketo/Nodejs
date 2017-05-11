// var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app)
{
    app.get('/produtos', function(req, res)
    {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        //res.send('<html><body><h1>Listagem de produtos</h1></body></html>')
        produtosDAO.lista(function(erros, resultados)
        {
            res.format({
                html: function(){ res.render('produtos/lista', {lista:resultados}); },
                json: function(){ res.json(resultados); } // ex: android
            });
        });
        connection.end();
    });

    app.get('/produtos/form', function(req, res){
        res.render('produtos/form', { errosValidacao:{}, produto:{} });
    });

    app.post('/produtos', function(req, res)
    {
        var produto = req.body; // express que fornece o body, mas precisa do body-parser
        console.log(produto);

        // express-validator
        req.assert('titulo', 'Título obrigatório').notEmpty(); 
        req.assert('preco', 'Formato inválido').isFloat();

        var erros = req.validationErrors();
        if (erros)
        {
            res.format({
                html: function(){
                    res.status(400).render('produtos/form',{errosValidacao:erros,produto:produto});
                },
                json: function(){
                    res.status(400).json(erros);
                }
            });
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function(erros, resultados){
            console.log(erros);
            res.redirect('/produtos');
        });
    });
}