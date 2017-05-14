var mysql = require('mysql'); // tem que instalar via console

// FACTORY METHOD: objeto complexo que foi isolado
function createDBConnection()
{
    if (!process.env.NODE_ENV || process.env.node === 'dev') // == 'development'
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

    if(process.env.NODE_ENV == 'production')
    {
        var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
        var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*):@(.*)\/(.*)\?/);
        return mysql.createConnection({
            host: grupos[3],
            user : grupos[1],
            password : grupos[2],
            database : grupos[4]
        }); 
    }
}

// wrapper: função que embrulha outra função
module.exports = function()
{
    return createDBConnection;
}