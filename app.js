const express = require('express');
const path = require("path");
const morgan = require('morgan');
const mysql = require('mysql');
const cookieParser = require('cookie-parser')
const session  = require('express-session')

const app = express();



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
//app.use(morgan('dev'));

// templates engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Static Routes
app.use(express.static(path.join(__dirname, 'public')));

//session
app.use(session({
    secret: 'key',
    resave: true,
    saveUninitialized: true,
}))

//cookies Parser
app.use(cookieParser())

app.use((req, res, next) => {
  if (!req.user)
    res.header('Cache-Control', 'private,no-cache,no-store,must-revalidate')
    next();
})

/*
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
*/

//route index
const index = require('./routes/index');
app.use('/',index)


require('./config/connection');

//Listen to port
app.listen(PUERTO, () => {
    console.log(`Server started on ${PUERTO}`);
});
