module.exports = function(app) 
{
    app.get('/', function(req, res) 
    {
        var connection = app.infra.connectionFactory();
        var produtos = new app.infra.ProdutosDAO(connection);

        produtos.lista(function(erros, resultados)
        {
            res.render('home/index',{livros: resultados});

            if (erros)
            {
                console.log('home.js erros: ' +erros);
            }
        });
        connection.end();
    });
}