var mincer = require('mincer');

var env = new mincer.Environment();

env.appendPath('app');

module.exports = {
  env: env,
  server: mincer.createServer(env)
}
