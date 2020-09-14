const express = require('express');
const path = require('path');
const logRequestAPI = require('./utils/log-request');
const logWorker = require('./utils/log-result-worker');
const app = express();
const port = 8080;

//Render engine config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Static folders
app.use('/images', express.static('images'));
app.use('/css', express.static('css'));

app.get('/', async function(req, res) {

    const result = await logRequestAPI();
    const data = await logWorker(result.response);

    res.render('dashboard', {data});

});

app.listen(port, function() {
    console.log('Aplicação iniciada na porta ' + port + '!');
});