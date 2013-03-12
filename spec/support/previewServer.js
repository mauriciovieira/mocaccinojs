var connect = require('connect'),
    mincer = require('mincer');

var env = new mincer.Environment();
env.appendPath('app');

var app = connect()
  .use(connect.static('public'))
  .use('/js', mincer.createServer(env))
  .listen(PREVIEW_PORT);

console.log('Listen port '+PREVIEW_PORT);
