var http = require('http');

var server = http.createServer(function(request, response){
    if (request.url == "/produtos")
        response.end("<html><body><h1>listando os produtos</h1></body></html>");
    else
    response.end("<html><body><h1>home</h1></body></html>")
});
server.listen(3000); // porta 3000

console.log('servidor está rodando');

// var http = require('http'); // carrega a lib http, que já faz parte do pacote de módulos default do Node.
// var porta = 3000;
// var ip = "localhost";

// var server = http.createServer(function(req, res) {    
//     // função de callback, onde escrevemos o código que será executado no retorno 
//     // da função, seguindo a forma de programação assíncrona imposta pelo Node.
//     console.log("Recebendo request");
//     // escreve algum cabeçalho http para o response da requisição
//     res.writeHead(    200, {'Content-Type': 'text/html'});
//     // mandamos o html na response
//     res.end('<html><body>Request recebido!</body></html>');
// });

// server.listen(porta, ip); // é a função que deixa o server criado disponível para receber requisições

// console.log("Server running at http://" + ip + ":" + porta + "/");