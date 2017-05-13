var mysql = require('mysql'); // tem que instalar via console

// FACTORY METHOD: objeto complexo que foi isolado
function createDBConnection()
{
    if(!process.env.NODE_ENV) // == 'development'
    {
        return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'Abcd1234',
            database : 'casadocodigo_nodejs'
        });
    }

    if(process.env.NODE_ENV == 'test')
    {
        return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'Abcd1234',
            database : 'casadocodigo_nodejs_test'
        }); 
    }
}

// wrapper: função que embrulha outra função
module.exports = function()
{
    return createDBConnection;
}