const express = require('express');

const app = express();

const index = require('./routes/index');

let PORT = "2021";

app.set('view engine', 'ejs');




//route index
app.use('/',index)


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});