var arc    = require('@architect/functions')
var layout = require('@architect/shared/layout.js')
var log    = require('@architect/shared/middleware/log.js')

function route(req, res) {
  res({
    html: layout(req, `
      <div class='introduction'>
        Hi, I'm Lonnie.
      </div>
      <div class='nav'>
        <a class='nav-link' href="http://github.com/lonnieking">I write code</a> &
        <br>
        <a class='nav-link' href="https://www.brewersfriend.com/homebrew/brewer/176717/lonnieking">I make beer</a>
      </div>
    `)
  })
}

exports.handler = arc.html.get(log, route)
