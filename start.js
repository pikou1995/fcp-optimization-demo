const webpack = require('webpack')
const config = require('./webpack.config')

const compiler = webpack(config)

let serverStarted = false
compiler.hooks.done.tap('ServePlugin', () => {
  if (serverStarted) return
  serverStarted = true
  require('./server')
})

compiler.watch(
  {
    poll: 1000,
    ignored: /node_modules/,
  },
  (err, stats) => {
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }) + '\n'
    )
  }
)
