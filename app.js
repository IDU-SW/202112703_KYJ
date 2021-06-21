const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false}));

const router = require('./router/router');
app.use(router);

module.exports = app;