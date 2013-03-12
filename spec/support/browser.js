global.browser = require('zombie');

global.useBrowser = function(callback) {
  before(function(done) {
    browser.visit(PREVIEW_ADDR, function(err, b) {
      callback.apply(b);
      done();
    });
  });
};

