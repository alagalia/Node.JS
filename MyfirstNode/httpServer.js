let http = require('http')
let fs = require('fs')
let handlers = require('./handlers/index')
let port = 1337

http
.createServer((req, res) => {
   if (req.method === 'GET') {
    for(let handler of handlers){
      let hasNext = handler(req, res)
      if(!hasNext){
        break
      }
    }
  } else if (req.method === 'POST') {
    res.writeHead(500)
    res.write('POST method not supported')
    res.end()
  }
})
.listen(port)

console.log(`Server listening on port ${port}`)
