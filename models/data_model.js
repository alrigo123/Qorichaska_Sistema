module.exports = {
  async getRooms(conex, foo) {
    await conex.query('SELECT * FROM thabitacion', foo)
  },

  savaData(conex,bool, foo) {
  },
}