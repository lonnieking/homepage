var arc    = require('@architect/functions')
var layout = require('@architect/shared/layout.js')
var log    = require('@architect/shared/middleware/log.js')

function route(req, res) {
  var body = `
    <div class='introduction'>
      Hi. I'm Lonnie!
    </div>
    <div class='content'>
      <p>
        I like to write <a href='http://github.com/lonnieking'>code</a> and make <a href='https://www.brewersfriend.com/homebrew/brewer/176717/lonnieking'>beer</a>.
      </p>
      <p>
        My favorite food is pizza.
      </p>
      <p>
        You won't find me on <a href='https://www.youtube.com/watch?v=H34QpoJsmrw'>social media</a>,
        but feel free to send me some <a href='mailto:hello@lonnie.cool'>electronic mail</a>.
      </p>
    </div>
  `

  res({ html: layout(req, body) })
}

exports.handler = arc.html.get(log, route)
