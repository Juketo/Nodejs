/* 
Header Accept, em que o cliente que está consumindo a url informa qual tipo de dados, 
ele aceita receber no response de sua requisição. Os navegadores tradicionais, por 
exemplo, utilizam por default o valor “text/html” em seu Accept.

Serviria para o Android puxar somente o formato JSON.
*/

// para enviar JSON para o server, tem que avisar o express com o comando
app.use(bodyParser.json());
// e adicionar um header
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    };