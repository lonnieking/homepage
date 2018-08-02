const assets = require('@architect/shared/assets.js')

module.exports = function layout(req, body) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>lonnie.cool</title>
        <link rel="shortcut icon" type="image/png" href="${assets.favicon}"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="css/styles.css">
        <meta name="google-site-verification" content="9PwAeGZ1oZvLcYctgYVy0wsxTfE0UvKgGqFq6idnTiY">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
      </head>
      <body>
        ${body}
      </body>
    </html>
  `
}
