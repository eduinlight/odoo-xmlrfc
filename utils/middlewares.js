module.exports = {

  //cuando se llama a una url que no esta definida
  show_404: function(req, res, next) {
    var err = new Error('Not Found')
    res.send({
      status: "404",
      message: "not found"
    })
  },
  
}