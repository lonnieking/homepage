let arc = require("@architect/functions");

module.exports = function layout(body) {
  let css = arc.static("/main.css")
  let favicon = arc.static("/favicon.png")
  let resume = "/resume"

  let nav = `
  <ul class="nav">
      <li>🍕 <a href=".">home</a></li>
      <li>📜 <a href="${resume}">resumé</a></li>
      <li>💌 <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%68%65%6C%6C%6F%40%6C%6F%6E%6E%69%65%2E%63%6F%6F%6C">e-mail</a></li>
    </ul>
  `

  return `
    <!doctype html>
    <html>
      <head>
        <title>lonnie.cool</title>
        <link rel="shortcut icon" type="image/png" href="${favicon}"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="${css}" media="screen"/>
        <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet">
      </head>
      <body>
        ${nav}
        ${body}
      </body>
    </html>
  `
}
