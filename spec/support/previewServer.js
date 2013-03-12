var connect = require('connect'),
    mincer = require('mincer');

var env = new mincer.Environment();
env.appendPath('app');

var app = connect()
  .use(connect.static('public'))
  .use('/js', mincer.createServer(env))
  .listen('3000');

console.log('Listen port 3000');
