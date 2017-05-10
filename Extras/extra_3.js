// o express consegue pegar valores passados no form (body) via
var produto = req.body;
// entretanto, ele precisa do ajuda de um parser
"npm install body-parser --save"
// se tiver um corpo na requisição ele preenche o body do request
// depois de instalado tem que chamar no express.js
var bodyParser = require('body-parser');
 app.use(bodyParser.urlencoded({extended: true}));

// para persistir no banco usa-se
ProdutosDAO.prototype.salva = function(produto,callback) {
    this._connection.query('INSERT INTO produtos SET ?', produto, callback);
}
// que poderia ser feito de forma manual:
ProdutosDAO.prototype.salva = function (produto, callback) {
    this._connection.query('insert into produtos (titulo, preco, descricao) values (?, ?, ?)',  [produto.titulo, produto.preco, produto.descricao], callback);
}

// always "redirect" after "post"... isso evita o problema do usuário apertar F5