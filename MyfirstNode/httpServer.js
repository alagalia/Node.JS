let http = require('http')
let fs = require('fs')
let url = require('url')
let port = 1337

http
.createServer((request, response) => {
  let parsedUrl = url.parse(request.url).pathname
  if (request.method === 'GET') {
    if (parsedUrl === '/favicon.ico') {
      fs.readFile('./favicon.ico', (err, data) => {
        if (err) { console.log(err) } else {
          response.writeHead(200)
          response.write(data)
          response.end()
        }
      })
    } else if (parsedUrl === '/') {
      fs.readFile('./index.html', (err, data) => {
        if (err) { console.log(err) } else {
          response.writeHead(200, {
            'content-type': 'text/html'
          })
          response.write(data)
          response.end()
        }
      })
    } else {
      fs.readFile('.' + parsedUrl, (err, data) => {
        if (err) {
          response.writeHead(404)
          response.write('404 URL not found')
          response.end()
          return
        }

        let contentType = 'text/plain'
        if(parsedUrl.endsWith('.css')){
          contentType = 'text/css'
        } else if (parsedUrl.endsWith('.js')){
          contentType = 'application/javascript'
        }
        response.writeHead(200, {
          'Content-type': contentType
        })
        response.write(data)
        response.end()
      })
    }
  } else if (request.method === 'POST') {
    response.writeHead(500)
    response.write('POST method not supported')
    response.end()
  }
})
.listen(port)

console.log(`Server listening on port ${port}`)
