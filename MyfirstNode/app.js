let fs = require('fs')
fs.readFile('app.js', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(data)
})
