const express = require('express');

const app = express();

let PORT = "2021";

app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    res.send("RESERVAS DEL HOTEL QORICHASKA");
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});