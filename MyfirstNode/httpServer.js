let http = require('http')

http
.createServer((request, response) => {
  if (request.method === 'POST') {
    response.writeHead(200, {
      'content-type': 'text/html'
    })
    response.write('<h1>Hi from POST method!</h1>')
    response.end()
  } else if (request.method === 'GET') {
    response.writeHead(500)
    response.write('GET method not supported')
    response.end()
  }
})
.listen(1337)
