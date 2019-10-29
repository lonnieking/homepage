let arc = require("@architect/functions");
let static = arc.http.helpers.static;

module.exports = function layout(body) {
  let css = static("/main.css");
  let favicon = static("/favicon.png");

  return `
    <!doctype html>
    <html>
      <head>
        <title>lonnie.cool</title>
        <link rel="shortcut icon" type="image/png" href="${favicon}"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="${css}">
        <link href="https://fonts.googleapis.com/css?family=Corben|Open+Sans&display=swap" rel="stylesheet">
      </head>
      <body>
        ${body}
      </body>
    </html>
  `;
};
