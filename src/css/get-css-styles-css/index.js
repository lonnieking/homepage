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
    font-family: 'Open Sans', sans-serif;
    margin: 0 auto;
    padding: 20px;
    width: 75%;
  }

  .introduction {
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .content {
    font-size: 1.5em;
  }

  p {
    line-height: 1.5em;
  }

  a {
    border-bottom: 2px solid #705055;
    color: white;
    padding: 3px 0;
    text-decoration: none;
  }

  a:hover {
    background-color: #705055;
  }
`

function route(req, res) { res({ css: css }) }

exports.handler = arc.css.get(log, route)
