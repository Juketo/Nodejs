var http = require('http');

var configuracoesJSON = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    header: {
        'Accept': 'application/json', // traz html
        //'Accept': 'text/json' // traz json
    }
};

http.get(configuracoesJSON, function(res){
    console.log(res.statusCode);
    res.on('data', function(body){
        console.log('Corpo:' + body);
    });
});

// se executa este arquivo colocando no console: node cliente-android.js
// (tem que compilar antes)