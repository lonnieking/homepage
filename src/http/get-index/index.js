var layout = require('@architect/shared/layout')

exports.handler = async function http(request) {

  var githubUrl = 'http://www.github.com/lonnieking'
  var brewersFriendUrl = 'https://www.brewersfriend.com/homebrew/brewer/176717/lonnieking'

  var body = `
  <main>
    <h1>Hi! I'm Lonnie!</h1>
    <blockquote>
      I'm a <a href=${githubUrl}>software developer</a>, currently working with the amazing folks at <a href='http://www.cogent.co'>Cogent</a>.
    </blockquote>
    <blockquote>
      If you'd like to get into contact with me, please feel free to send me an <a href='mailto:hello@lonnie.cool'>electronic mail</a>.
    </blockquote>
  </main>
  `
  return {
    status: 201,
    type: 'text/html; charset=utf8',
    body: layout(body)
  }
}

