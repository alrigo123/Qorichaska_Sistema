const mysql = require('mysql')
const conex = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cjmxc100',
  database: 'dbreserva',
  /*
      host: 'bwuu3e9kaid8qkawouep-mysql.services.clever-cloud.com',
      user: 'um7hmnsl1mmq7opq',
      port: 3306,
      password: '7JOZLnBP1b9SEpMZcoCq',
      database: 'bwuu3e9kaid8qkawouep',
      */
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
