var mysql = require('mysql'); // tem que instalar via console

// FACTORY METHOD: objeto complexo que foi isolado
function createDBConnection()
{
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'Abcd1234',
        database : 'casadocodigo_nodejs'
    });
}

// wrapper: função que embrulha outra função
module.exports = function()
{
    return createDBConnection;
}