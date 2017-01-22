let url = require('url')
let fs = require('fs')

module.exports = (req, res)=>{
    req.pathname = req.pathname || url.parse(req.url).pathname
      fs.readFile('.' + req.pathname, (err, data) => {
        if (err) {
          res.writeHead(404)
          res.write('404 URL not found')
          res.end()
          return true
        }

        let contentType = 'text/plain'
        if(req.pathname.endsWith('.css')){
          contentType = 'text/css'
        } else if (req.pathname.endsWith('.js')){
          contentType = 'application/javascript'
        }
        res.writeHead(200, {
          'Content-type': contentType
        })
        res.write(data)
        res.end()
    })
}