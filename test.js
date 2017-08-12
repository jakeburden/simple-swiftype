require('env2')('.env')

var swiftype = require('./')

var engineKey = process.env.key

swiftype(engineKey, function (err, data) {
  if (err) return console.error(err)
  console.log(data)
})
