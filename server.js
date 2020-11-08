const Cp = require('child_process')
const Koa = require('koa')
const Static = require('koa-static-cache')

const app = new Koa()
app.use(
  Static('./dist', {
    buffer: false,
    gzip: true,
    dynamic: true,
  })
)

const port = 8080

app.listen(port)

const url = `http://localhost:${port}`
console.log(`Server started at ${url}`)
Cp.exec(`start chrome ${url}/index.html`)
