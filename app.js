const express = require('express');

const app = express();
const port = 8080;


app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/js', express.static(__dirname + '/public/js'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

const routerNews  = require('./src/routes/news');
app.use('/', routerNews);

app.listen(port);