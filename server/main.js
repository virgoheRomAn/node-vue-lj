var path = require('path')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackConfig = require('../config/webpack.dev.config')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var querystring = require('querystring')

var env = process.env.NODE_ENV

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//api
var user = require('./routes/user/index')

app.use(user)

if (env === 'native') {
  //本地开发
  var complier = webpack(webpackConfig)
  var devMiddleware = webpackDevMiddleware(complier, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: {
      colors: true,
    }
  })

  var hotMiddleware = webpackHotMiddleware(complier, {
    log: false,
    path: '/__webpack_hmr',
    heartbeat: 2000,
  })
  app.use(devMiddleware)
  app.use(hotMiddleware)

} else {
  //访问静态资源
  app.use(express.static(path.resolve(__dirname, '../assets')))
  app.get('*', function response (req, res) {
    res.sendFile(path.resolve(__dirname, '../assets/index.html'))
  })
}

var server = app.listen(8888, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('环境:', env)
  console.log('服务已开启，访问地址为 http://%s:%s', host, port)
})
