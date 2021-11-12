const express = require('express');
const path = require("path");
const morgan = require('morgan');
const mysql = require('mysql');
const cookieParser = require('cookie-parser')

const app = express();

const index = require('./routes/index');


require('dotenv').config();

const PUERTO = process.env.PORT;
const key = process.env.KEY;
const day = process.env.DAY;
const token = process.env.JWT_WEB_TOKEN;


console.log(key , day ,token);





//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Dev
app.use(morgan('dev'));


// templates engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Static Routes
app.use(express.static(path.join(__dirname, 'public')));


//route index
app.use('/',index)


//Listen to port
app.listen(PUERTO, () => {
    console.log(`Server started on ${PUERTO}`);
});
