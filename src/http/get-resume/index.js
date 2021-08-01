let layout = require('@architect/shared/layout')
let arc = require("@architect/functions")

function route(_req, res) {
  const body = `
    <main class="resume">
        <h1>Lonnie King</h1>
        
        <h2>values</h2>
        <p>
          This is a list of values that I apply to my life and my work. I try very hard not to 
          compromise on these values.
        </p>
        <div>
          <h3>authenticity through empathy</h3>
          <p>
            Let's communicate with each other transparently. Let's build an environment where 
            we feel safe sharing our feelings with each other. Let's get to know each other. no 
            games, just honesty.
          </p>
          <h3>creativity through collaboration</h3>
          <p>
            Two heads are better than one. We all have great ideas, so let's share them. If we
            work together, merge thoughts, we can solve any problem. We can get a lot more done 
            together than we can apart.
          </p>
          <h3>wellbeing through action</h3>
          <p>
            The actions we take have an impact on the people and environment around us. Let's take time
            to think about the impact before we act. Let's use our actions to do good, to make the world a
            nicer place to live in.
          </p>
        </div>

        <h2>skills</h2>
        <ul class="skills">
          <li>python</li>
          <li>ruby</li>
          <li>c#</li>
          <li>nodejs</li>
          <li>sql</li>
          <li>git</li>
        </ul>
        <ul class="skills">
          <li>devops</li>
          <li>amazon web services</li>
          <li>google cloud platform</li>
          <li>data engineering</li>
          <li>agile software development</li>
        </ul>
 
        <h2>experience</h2>
        <div class="timeline-year">2016 to present</div>
        <div class="timeline-event">senior software developer</div>
        @ <span class="timeline-location"><a class="timeline-link" href="https://www.cogent.co/">Cogent</a></span>
        <ul>
          <li></li>
        </ul>

        <div class="timeline-year">2008 to 2016</div>
        <div class="timeline-event">senior applications programmer</div>
        @ <span class="timeline-location"><a class="timeline-link" href="https://www.progressive.com/">Progressive Insurance</a></span>
        <ul>
          <li></li>
        </ul>

        <h2>education</h2>
        <div class="timeline-year">2004 to 2008</div>
        <div class="timeline-event">bachelor of science in mgmt information systems</div>
        @ <span class="timeline-location"><a class="timeline-link" href="https://www.okstate.edu">Oklahoma State University</a></span>

      </main>
  `
  
  res({ html: layout(body) })
}

exports.handler = arc.http(route)