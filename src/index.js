const express = require('express');
const app = express();
const port = 8080;

app.get('/', function(req, res) {
    res.send('Olá Mundo!');
});

app.listen(port, function() {
    console.log('Aplicação iniciada na porta ' + port + '!');
});