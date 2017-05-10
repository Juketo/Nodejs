/*
CommonJS é uma convenção para carregamentos de módulos javascript em aplicações server-side.
O objeto que o node disponibiliza é o module e a função é passada para o atributo exports desse objeto.
*/

/*
Rotas são as configurações que criamos para cada url específica que queremos atender no nosso sistema server-side implementado em javascript.
*/

// install mySQL 
// https://dev.mysql.com/downloads/mysql/

/*
create database casadocodigo_nodejs;

use casadocodigo_nodejs;

CREATE TABLE produtos (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  titulo varchar(255) DEFAULT NULL,
  descricao text,
  preco decimal(10,2) DEFAULT NULL);

insert into produtos(titulo, descricao, preco)
values ('Comecando com nodejs', 'livro introdutório sobre nodejs', 39.90);
insert into produtos(titulo, descricao, preco)
values ('Comecando com javascript', 'livro introdutório sobre javascript', 39.90);
insert into produtos(titulo, descricao, preco)
values ('Comecando com express', 'livro introdutório sobre express', 39.90);
*/

// npm install mysql --save

// para organizar o código JSON, usar o site
// https://jsonlint.com/

// Para evitar ter vários ‘requires’ espalhados pela aplicação, usa-se
// carregamento automático das módulos através da lib express-load
// npm install express-load --save
var load = require('express-load'); 
//...
load('routes',{cwd: 'app'})
        .then('infra')
        .into(app);
// a ordem importa

// para problemas com o "this", tentar usar "new" na hora de passar a função