const mysql = require('mysql');

const conex = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'cjmxc100',
    //password : '',
    database : 'database'
});

conex.connect((err)=>{
    if(!err){
        // console.log(conex.config.database)
         console.log(`Success connected to ${conex.config.database} database`);
     }else{
         console.log(`Error connecting to ${conex.config.database} - ${err}`);
     }
});

module.exports = conex;

