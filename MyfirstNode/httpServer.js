let http = require('http')
let fs = require('fs')
http
.createServer((request, response) => {
  if (request.method === 'GET') {
    fs.readFile('./index.html', (err, data) => {
      if (err) { console.log(err) } else {
        response.writeHead(200, {
          'content-type': 'text/html'
        })
        response.write(data)
        response.end()
      }
    })
  } else if (request.method === 'POST') {
    response.writeHead(500)
    response.write('POST method not supported')
    response.end()
  }
})
.listen(1337)
