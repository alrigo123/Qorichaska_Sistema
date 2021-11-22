module.exports = {
  async getRooms(conex, foo) {
    conex.query('SELECT * FROM thabitacion', foo)
  },
}
