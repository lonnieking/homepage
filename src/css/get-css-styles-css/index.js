let arc    = require('@architect/functions')
var log    = require('@architect/shared/middleware/log.js')
var assets = require('@architect/shared/assets.js')

let css = `
  html {
    background-image: url(${assets.backgroundImage});
    background-repeat: repeat;
  }

  body {
    color: white;
    font-family: sans-serif;
    font-weight: 600px;
    margin: 0;
    padding: 20px;
  }

  .introduction {
    font-size: 1.5em;
    margin-bottom: 15px;
    text-shadow: 4px 4px 4px #705055;
  }

  .nav {
    font-size: 1.2em;
  }

  .nav-link {
    display: inline-block;
    margin: 10px 0;
    text-shadow: 2px 2px 2px #705055;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    font-style: italic;
  }
`

function route(req, res) { res({ css: css }) }

exports.handler = arc.css.get(log, route)
