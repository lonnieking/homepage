var arc    = require('@architect/functions')
var layout = require('@architect/shared/layout.js')
var log    = require('@architect/shared/middleware/log.js')

function route(req, res) {
  res({
    html: layout(req, ``)
  })
}

exports.handler = arc.html.get(log, route)
