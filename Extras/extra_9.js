/*
Middlewares são funções cujo objetivo é possibilitar a interceptação do request e 
adicionar verificações e comportamentos sobre eles.

Vários plugins que utilizamos na aplicação junto do express fazem uso dos middlewares. 
É o caso do bodyparser ou do express-validator, para citar dois exemplos.

A ordem importa.

Poderíamos utilizar os Middlewares, por exemplo, para adicionar uma funcionalidade 
própria da nossa aplicação no ciclo de vida do express, como o tratamento de páginas 
não encontradas.
*/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressValidatior());
app.use(function(req, res, next){
    res.status(404).render('erros/404');
});