var connect = require('connect'),
    env = require('../../env');

var app = connect()
  .use('/js', env.server)
  .use(connect.static('public'))
  .listen(PREVIEW_PORT);

console.log('Listen port '+PREVIEW_PORT);
