const express = require('express');
const webpack = require('webpack');
const webpackconfig = require('./webpack.config');
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const env = process.env.NODE_ENV || 'development'
const _PORT = process.env.REACT_PORT || 3030
process.env.FROM_NODE = true;

const app = express();
app.use(express.static('dist'));

const webpackCompiler = webpack(webpackconfig);

app.use(webpackMiddleware(webpackCompiler,{}));

if (env === 'development') {
    app.use( webpackHotMiddleware(webpackCompiler));
}

var server = app.listen(_PORT, () => {
  console.log(`Example app listening on port ${_PORT}!`)
});


process.on('SIGTERM', function onSigterm () {
  console.info('Got SIGTERM. Graceful shutdown start', new Date().toISOString())
  // start graceul shutdown here
  shutdown()
})

function shutdown() {
  server.close(function onServerClosed (err) {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    // closeMyResources(function onResourcesClosed (err) {
      // error handling
      process.exit()
    // })
  })
}