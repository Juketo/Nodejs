// valiudação de formulário no server
'npm install express-validator --save'
// no express
var expressValidator = require('express-validator');
app.use(expressValidator());
// no post
req.assert('titulo', 'Título obrigatório').notEmpty(); 
req.assert('preco', 'Formato inválido').isFloat();

// para devolver a variável (nao apagá-la)
res.render('produtos/form', {validationErrors:errors, produto: produto} );
<input type="text" name="titulo" placeholder="titulo do livro" 
value="<%=produto.titulo%>"/>

// deve-se retornar erro 400 no http quando a validação for inválida:
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
// O Status Code HTTP utilizado é o 400 que significa Bad Request