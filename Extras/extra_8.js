// checar diferença entre txt (.js)
// https://www.diffchecker.com/diff

// boa prática conhecida como Always Redirect After Post.
app.post("/promocoes", function(req,res) 
{
    var promocao = req.body;
    res.redirect("/promocoes/form");
});

// método antigo de autoupdate de página
'<script>'
    setInterval(function()
    {
        // ajax pedindo por novas promoções
    }, 10000); // a cada 10s
'</script>'
// é ruim pq gasta muito recurso do servidor quando nao traz nada novo

// novo jeito é web sockets via ES5
// ele mantém uma conexão aberta e quando chega novo o server notifica
'<script>'
    navegador.quandoTemAlgoNovo = function() {};
'</script>'
// em outras palavras
'<script>'
    var ws = new Websocket('ws://localhost:3000/novas/promocoes');
    ws.onmessage = function(data){
        // ...
    };
'</script>'

// mas pode usar o socket.io que facilita as coisas
'npm install socket.io --save'
// quando se instala ele ja se integra com o nodejs, e expõe uma rota
// se utiliza assim:
<script src="/socket.io/socket.io.js"></script>
<script>
    var socket = io();
    socket.on('novaPromocao', function(data){
        alert('Livro em promocao' +data.livro.id);
    });
</script>
// importar no apps.js
var http = require('http').Server(app); // pq o socket_io pede ele
var io = require('socket.io')(http);