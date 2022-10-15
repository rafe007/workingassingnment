const express = require('express');
const app = express();
const port = process.env.PORT || 3018;
const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');

const movieRoute = require('./movie-router');

//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', movieRoute);

app.listen(port);
console.log('Server running on port: ' + port);
