let http = require('http')

http
.createServer((request, response) => {
  response.writeHead(200, {
    'content-type': 'text/html'
  })
  response.write('<h1>Hi from node!</h1>')
  response.end()
})
.listen(1337)
