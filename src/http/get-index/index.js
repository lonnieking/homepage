var layout = require('@architect/shared/layout')
let arc = require("@architect/functions")

function route(_req, res) {
  var githubUrl = 'http://www.github.com/lonnieking'
  var cogentUrl = 'http://www.cogent.co'
  
  var body = `
  <main>
    <h1>Hi! I'm Lonnie.</h1>
    <p>
      I love to travel, watch live music, eat (a lot) of pizza, and brew my own beer.
    </p>
    <p>
      I'm also a <a href=${githubUrl}>software developer</a>, currently working with the amazing folks at <a href=${cogentUrl}>Cogent</a> where we build software for some of the greatest companies in Melbourne.
    </p>
    <p>
      If you'd like to get in touch, please send me an <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%68%65%6C%6C%6F%40%6C%6F%6E%6E%69%65%2E%63%6F%6F%6C">e-mail</a>.
    </p>
  </main>
  `
  
  res({ html: layout(body) })
}

exports.handler = arc.http(route)