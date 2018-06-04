module.exports = function layout(req, body) {

  var buildLink = i => `
    <div class="row">
      <a href=${i.href}>${i.title}</a>
    </div>
  `
  var links = [
    { title: 'code',   href: 'https://www.github.com/lonnieking' },
    { title: 'beer',   href: 'https://brewgr.com/!/lonnie' },
    { title: 'email', href: 'mailto:hello@lonnieking.net' },
  ].map(buildLink).join('')

  var stylesheetUrl = 'https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css'

  return `
    <!doctype html>
    <html>
      <head>
        <title>lonnie.cool</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="${stylesheetUrl}">
      </head>
      <body>
        <div class="container">
          <h4>Hi, I'm Lonnie 👋</h4>
          <h5>I like to make software 👾 and beer 🍺</h5>
          <div class="row">${links}</div>
          <div class="row">${body}</div>
        </div>
      </body>
    </html>
  `
}
