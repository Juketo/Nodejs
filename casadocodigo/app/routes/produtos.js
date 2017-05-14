// var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app)
{
    app.get('/produtos', function(req, res, next)
    {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        //res.send('<html><body><h1>Listagem de produtos</h1></body></html>')
        produtosDAO.lista(function(erros, resultados)
        {
            if (erros)
            {
                return next(erros); // express lida com o erro
            }

            res.format({
                html: function(){ res.render('produtos/lista', {lista:resultados}); },
                json: function(){ res.json(resultados); } // ex: android
            });
        });
        connection.end();
    });

    app.get('/produtos/form', function(req, res){
        res.render('produtos/form', { errosValidacao:{}, produto:{} });
        connection.end();
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
            console.log('erro é esse aqui: ' +errors);
            return;
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function(erros, resultados){
            console.log(erros);
            if(!erros) 
            {
                res.redirect("/produtos");
                console.log('pode ser esse erro: ' +erros)
            }
        });
      connection.end();  
    });

    app.get("/produtos/:id",function(req,res) 
    {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.produtosDAO(connection);

        produtosDAO.buscaPorId(req.params.id,function(error, results, fields){
            if(results.length == 0){
                res.status(404).send();
                return ;
            }
            res.json(results);
        });

        connection.end();
    });
}