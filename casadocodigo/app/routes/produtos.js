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
            res.render('produtos/lista', {lista:resultados});
        });
        connection.end();
    });

    app.get('/produtos/form', function(req, res){
        res.render('produtos/form');
    });

    app.post('/produtos', function(req, res)
    {
        var produto = req.body; // express que fornece o body, mas precisa do body-parser
        console.log(produto);

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function(erros, resultados){
            res.redirect('/produtos');
        });
    });
}