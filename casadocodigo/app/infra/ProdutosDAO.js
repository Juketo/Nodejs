function ProdutosDAO(connection)
{
    this._connection = connection;
}
// criar funções é tipo criar uma classe

ProdutosDAO.prototype.lista = function(callback)
{
    this._connection.query('select * from produtos', callback);
}

ProdutosDAO.prototype.salva = function(produto, callback)
{
    this._connection.query('insert into produtos set ?', produto, callback);
    // o driver do mysql identifica o ? como o JSON do produto
}

ProdutosDAO.prototype.buscaPorId = function (id, callback) {
    this._connection.query("select * from livros where id = ?", [id], callback);
}

module.exports = function()
{
    return ProdutosDAO;
}