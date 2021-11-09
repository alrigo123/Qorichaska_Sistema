const express = require('express');
const path = require("path");
const morgan = require('morgan');
const app = express();

const index = require('./routes/index');

let PORT = "2021";

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
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});