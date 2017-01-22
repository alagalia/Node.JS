let http = require('http')
let fs = require('fs')
let port = 1337

http
.createServer((request, response) => {
  console.log(request.url)
  // console.log(request.headers)

  if (request.method === 'GET') {
    if (request.url === '/favicon.ico') {
      fs.readFile('./favicon.ico', (err, data) => {
        if (err) { console.log(err) } else {
          response.writeHead(200)
          response.write(data)
          response.end()
        }
      })
    } else if (request.url === '/') {
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
      response.writeHead(404)
      response.write('404 URL not found')
    }
  } else if (request.method === 'POST') {
    response.writeHead(500)
    response.write('POST method not supported')
    response.end()
  }
})
.listen(port)

console.log(`Server listening on port ${port}`)
