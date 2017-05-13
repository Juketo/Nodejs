// instalar o mocha
'npm install mocha --save-dev'
// -dev indica que deve ficar restrito ao ambiente de dev
// na sequencia, rodar o arquivo de script
'node node_modules/mocha/bin/mocha'

// mocha é assíncrono

// estrutura de teste
var http = require('http');
var assert = require('assert');
describe('#ProdutosController', function(){
    it('#listagem json', function(done)
    {
        var configuracoes = 
        {
            hostname: 'localhost',
            port: 3000,
            path: '/produtos',
            headers: { 'Accept': 'application/json', }
        };
        http.get(configuracoes, function(res)
        {
            assert.equal(res.statusCode, 200);
            assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
            
            done(); // precisa falar quando termina, pq é assíncrona
        });

    })
});

// supertest: facilita a escrita do teste
'npm install supertest --save-dev'
// nao precisa ficar compilando com o express, quando se declara no supertest

// o ideal é um banco pra teste e outro pra dev
if (process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo_nodejs_teste'
        });
    }
// para executar
'SET NODE_ENV=test'
// Um outra opção seria incluir essa informação no package.json:
"scripts": { "start": "set NODE_ENV=test" }

'node node_modules/mocha/bin/mocha'

// node-database-clear é uma biblioteca que limpa todas as tabelas