// var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app)
{
    app.get('/produtos', function(req, res)
    {
        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connection);

        //res.send('<html><body><h1>Listagem de produtos</h1></body></html>')

        produtosBanco.lista(function(erros, resultados)
        {
            res.render('produtos/lista', {lista:resultados});
        });

        connection.end();
    });

    // app.get('produtos/remove', function()
    // {
    //     var produto = ProdutosDAO.carrega();
    // });
}