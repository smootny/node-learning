const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Welcome to our short history')
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't display this part of our home page</p>
      <a href="/">Go back to home</a>`)
  }
})

server.listen(5001)