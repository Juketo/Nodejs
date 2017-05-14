/* Onde colocar em produção: (deploy)

https://www.digitalocean.com/ -> US$ 5/mo
boa para tomar conta do ambiente
configura nodejs, DB, backup, versoes

no terminal de lá:
'apt-get install'
'node app'

para não ter trabalho
https://www.heroku.com/ -> digitalOcean bombado
maneira simples de add novos softwares... node ja vem instalado
comando simples ja cria DB

https://toolbelt.heroku.com/
baixa aplicação que facilita painel do heroku
após instalado:
heroku login -> loga
heroku apps -> lista apps
heroku apps --help
heroku apps:create cdc-nodejs1

guit remote

D:\Git\Node.js\casadocodigo>heroku apps:create nodejs-jkt1
Creating nodejs-jkt1... done
https://nodejs-jkt1.herokuapp.com/ | https://git.heroku.com/nodejs-jkt1.git

para usar SQL no heroku
ele usa o serviço
http://w2.cleardb.net/ -> é um heroku para banco de dados

heroku addons:create cleardb:ignite --app casadocodigo-jkto 
// ignite é o serviço mais básico

heroku config --app casadocodigo-jkto -> para ver a url do clearDB
=== casadocodigo-jkto Config Vars
CLEARDB_DATABASE_URL: mysql://be456f78968f4a:88edd70f@us-cdbr-iron-east-03.cleardb.net/heroku_8b71a9e8e5bc52d?reconnect=true
é a url de conexão
be456f78968f4a login
88edd70f senha
us-cdbr-iron-east-03.cleardb.net host do banco
heroku_8b71a9e8e5bc52d nome do banco

da para acessar via MySQL_Workbench

ou faz via linha de comando do sql
*/

// no connectionFactory, ficaria
if(process.env.NODE_ENV == 'production')
{
    return mysql.createConnection({
        host : 'us-cdbr-iron-east-03.cleardb.net',
        user : 'be456f78968f4a',
        password : '88edd70f',
        database : 'heroku_8b71a9e8e5bc52d'
    }); 
}
// entretanto no Git, ficaria visível, logo, poderia se usar a variável de ambiente
if(process.env.NODE_ENV == 'production')
{
    var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
    var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*):@(.*)\/(.*)\?reconnect=true/);
    return mysql.createConnection({
        // grupos[0] é o regex
        host: grupos[3],
        user : grupos[1],
        password : grupos[2],
        database : grupos[4]
    }); 
}

// no ambiente do banco do heroku, usar o script
/*
use heroku_8b71a9e8e5bc52d;
CREATE TABLE produtos (
    id int(11) NOT NULL AUTO_INCREMENT,
    titulo varchar(255) DEFAULT NULL,
    descricao text,
    preco decimal(10,2) DEFAULT NULL,
      PRIMARY KEY (id)
);
*/

/* para avisar o heroku a dar o node .js no arquivo correto, deve-se no package.json

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"
  },

assim o heroku vai poder executar npm start para lançar a aplicação
*/

// deixar a porta em aberto para o heroku
var porta = process.env.PORT || 3000; // deixa em aberto se não achar, usa a 300
http.listen(porta, function(){});

// para enviar
'git push heroku master'

// entretanto requer que esteja linkado com o github... 
// para isso na app do heroku, vai em Deploy -> Deployment method -> GitHub
// autoriza e pode colocar para deploy automático


