function ProdutosDAO(connection)
{
    this._connection = connection;
}
// criar funções é tipo criar uma classe

ProdutosDAO.prototype.lista = function(callback)
{
    this._connection.query('select * from produtos', callback);
}

module.exports = function()
{
    return ProdutosDAO;
}