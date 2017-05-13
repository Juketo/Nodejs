var express = require('../config/express')();
var request = require('supertest')(express); // pack de fora

describe('#ProdutosController_Supertest', function()
{
    beforeEach(function(done)
    {
        var conn = express.infra.connectionFactory();
        conn.query("delete from produtos", function(ex, result){
            if (!ex){
                done(); // se não deu nenhum erro, vai pra próxima
            }
        });
    });

    it('#listagem json', function(done)
    {
        // supertest encapsula as configurações

        request.get('/produtos') // atalho por causa do express
               .set('Accept', 'application/json')
               .expect('content-type', /json/) // entre "/" é regex
               .expect(200, done);              
    });

    it('#cadastro de novo produto com dados inválidos', function(done)
    {
        request.post('/produtos')
               .send({titulo:"", descricao:"novo livro"})
               .expect(400, done);
    });

    // por algum motivo, um segundo teste mandando o post/send, da exceção

    it('#cadastro de novo produto com dados válidos', function(done)
    {
        request.post('/produtos')
               .send({titulo:"título bacana", 
                      descricao:"novo livro bacana", 
                      preco:99.50})
               .expect(302, done);
    });
});


        
// assert.equal(res.statusCode, 200);
// assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
// done(); // precisa falar quando termina, pq é assíncrona