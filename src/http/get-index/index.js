var layout = require('@architect/shared/layout')

exports.handler = async function http(request) {

  var githubUrl = 'http://github.com/lonnieking'
  var brewersFriendUrl = 'https://www.brewersfriend.com/homebrew/brewer/176717/lonnieking'

  var body = `
    <div class='introduction'>
      Hi. I'm Lonnie!
    </div>
    <div class='content'>
      <p>
        I like to write <a href=${githubUrl}>code</a> and make <a href=${brewersFriendUrl}>beer</a>.
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
  return {
    status: 201,
    type: 'text/html; charset=utf8',
    body: layout(body)
  }
}

