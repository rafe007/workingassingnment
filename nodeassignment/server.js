const express = require('express');
const app = express();
const port = process.env.PORT || 3016;
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user-router');

//app.use(morgan('combined', {  skip: function (req, res) { return res.statusCode < 400 }}));



app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));



app.use('/', userRoute);

//app.use(express.static('public'));
//console.log(process.env);

mongoose.connect('mongodb://localhost:27017/mydb',{}, () => {
    app.listen(port);
    
    console.log('Server running on port: ' + port);
})


