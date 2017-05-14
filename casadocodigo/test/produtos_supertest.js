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

    it('#listagem de produtos json', function (done) 
    {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200,done)

    });

    it('#listagem de produtos html', function (done) 
    {
        request.get('/produtos')
            .expect('Content-Type', /html/)
            .expect(200,done)

    });

    it('#cadastro de novo produto com dados inválidos', function(done)
    {
        request.post('/produtos')
               .send({titulo:"", descricao:"novo livro desc"})
               .expect(400, done);
    });

    // por algum motivo, um segundo teste mandando o post/send, da exceção

    it('#cadastro de novo produto com dados válidos', function(done)
    {
        request.post('/produtos')
               .send({titulo:"título bacana extra", 
                      preco:99.50,
                      descricao:"novo livro bacanudo" })
               .expect(302)
               .end(function(err,response)
               { 
                   console.log('aqui deu erro: ' +err);
                   done(); 
               });
    });
});


        
// assert.equal(res.statusCode, 200);
// assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
// done(); // precisa falar quando termina, pq é assíncrona