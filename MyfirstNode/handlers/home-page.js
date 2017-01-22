let url = require('url')
let fs = require('fs')

module.exports = (req, res)=>{
    req.pathName = req.pathname || url.parse(req.url).pathname
    if (req.pathname === '/') {
        fs.readFile('./index.html', (err, data) => {
          if (err) { console.log(err) } else {
            res.writeHead(200, {
              'content-type': 'text/html'
            })
            res.write(data)
            res.end()
          }
        })
  }else {
      return true
    }
}