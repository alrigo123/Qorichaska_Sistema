const mysql = require('mysql')
const conex = mysql.createConnection({
  /*
  host: 'localhost',
  user: 'root',
  password: 'cjmxc100',
  database: 'dbreserva',
  */
  host: 'b9pfpxmqupyksx8wmwkz-mysql.services.clever-cloud.com',
  user: 'uqgehdbrdlo92ywr',
  port: 3306,
  password: 'QqXxMZQHyYXnGCvda52W',
  database: 'b9pfpxmqupyksx8wmwkz',
})

try {
  conex.connect((err) => {
    if (!err) {
      // console.log(conex.config.database)
      console.log(`Success connected to ${conex.config.database} database`)
    } else {
      throw `Error connecting to ${conex.config.database} Catch -> Error ${err}`
    }
  })
} catch (error) {
  console.log(error)
}

module.exports = conex
