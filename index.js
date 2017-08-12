var get = require('simple-get')

function simpleSwiftype (key, cb) {
  var url = 'https://api.swiftype.com/api/v1/public/engines/search.json?callback=?&engine_key=' + key
  get.concat(url, function (err, res, data) {
    if (err) cb(err)
    cb(null, data.toString())
  }) 
}

module.exports = simpleSwiftype

