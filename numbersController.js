var numbers = require('./numbers');

module.exports = {
  get: function(req, res, next){
    res.send(numbers)
  }
}
