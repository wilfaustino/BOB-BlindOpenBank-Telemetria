const express = require('express');
const path = require("path");
const app = express();
const port = 8080;

//Render engine config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Static folders
app.use('/images', express.static('images'));
app.use('/css', express.static('css'));

app.get('/', function(req, res) {
    res.render('dashboard', { test: '' });
});

app.listen(port, function() {
    console.log('Aplicação iniciada na porta ' + port + '!');
});