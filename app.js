const express = require('express');
const path = require("path");
const morgan = require('morgan');
const app = express();

const index = require('./routes/index');


require('dotenv').config();

const PORTO = process.env.PORT;
const key = process.env.KEY;
const day = process.env.DAY;
const token = process.env.JWT_WEB_TOKEN;


console.log(key , day ,token);

app.set('view engine', 'ejs');



//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Dev
app.use(morgan('dev'));


// Static Routes
app.use(express.static(path.join(__dirname, 'public')));


//route index
app.use('/',index)


//Listen to port
app.listen(PORTO, () => {
    console.log(`Server started on ${PORTO}`);
});